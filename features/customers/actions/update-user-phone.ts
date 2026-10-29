"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { updatePhoneSchema } from "../schemas/update-user.schema";
import { Prisma } from "@/prisma/generated/prisma/client";
import { ActionResult } from "@/features/shared/action-result";

export async function updateUserPhone(
  userId: string,
  input: unknown,
): Promise<ActionResult> {
  const parsed = updatePhoneSchema.safeParse(input);

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.issues[0]?.message ?? "Некорректный номер телефона",
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
        success: false,
        message: "У пользователя нет адреса для изменения телефон",
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
          success: false,
          message: "Этот номер телефона уже используется",
        };
      }
    }

    await prisma.userAddress.update({
      where: { userId },
      data: { phone },
    });

    revalidatePath(`/customers/`);
    revalidatePath(`/customers/${userId}`);

    return { success: true, message: "Номер телефона успешно обновлён" };
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return {
        success: false,
        message: "Этот номер телефона уже используется",
      };
    }

    console.error(`Failed to update user phone:`, error);

    return {
      success: false,
      message: "Не удалось изменить номер телефона",
    };
  }
}
