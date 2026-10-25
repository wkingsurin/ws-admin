"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { updatePhoneSchema } from "../schemas/update-user.schema";
import { Prisma } from "@/prisma/generated/prisma/client";

export async function updateUserPhone(userId: string, input: unknown) {
  const parsed = updatePhoneSchema.safeParse(input);

  if (!parsed.success) {
    return {
      success: false as const,
      errors: {
        phone: parsed.error.issues.map((issue) => issue.message),
        _form: [] as string[],
      },
    };
  }

  const { phone } = parsed.data;

  try {
    const existingAddress = await prisma.userAddress.findUnique({
      where: { userId },
      select: { id: true },
    });

    if (!existingAddress) {
      return {
        success: false as const,
        errors: {
          phone: ["У пользователя нет адреса для изменения телефон"],
          _form: [] as string[],
        },
      };
    }

    if (phone !== null) {
      const duplicatePhone = await prisma.userAddress.findFirst({
        where: {
          phone,
          userId: {
            not: userId,
          },
        },
        select: {
          id: true,
        },
      });

      if (duplicatePhone) {
        return {
          success: false as const,
          errors: {
            phone: ["Этот номер телефона уже используется"],
            _form: [] as string[],
          },
        };
      }
    }

    await prisma.userAddress.update({
      where: { userId },
      data: { phone },
    });

    revalidatePath(`/customers/`);
    revalidatePath(`/customers/${userId}`);

    return { success: true as const };
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return {
        success: false as const,
        errors: {
          phone: [] as string[],
          _form: ["Этот номер телефона уже используется"],
        },
      };
    }

    console.error(`Failed to update user phone:`, error);

    return {
      success: false as const,
      errors: {
        phone: [] as string[],
        _form: ["Не удалось изменить номер телефона"],
      },
    };
  }
}
