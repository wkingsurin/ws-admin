"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { updateEmailSchema } from "../schemas/update-user.schema";
import { Prisma } from "@/prisma/generated/prisma/client";

export async function updateUserEmail(userId: string, input: unknown) {
  const parsed = updateEmailSchema.safeParse(input);

  if (!parsed.success) {
    return {
      success: false as const,
      errors: {
        email: parsed.error.issues.map((issue) => issue.message),
        _form: [] as string[],
      },
    };
  }

  const { email } = parsed.data;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    if (existingUser && existingUser.id !== userId) {
      return {
        success: false as const,
        errors: {
          email: ["Этот email уже используется"],
          _form: [] as string[],
        },
      };
    }

    await prisma.user.update({
      where: { id: userId },
      data: { email },
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
          email: [] as string[],
          _form: ["Этот email уже используется"],
        },
      };
    }

    console.error(`Failed to update user email:`, error);

    return {
      success: false as const,
      errors: {
        email: [] as string[],
        _form: ["Не удалось изменить email"],
      },
    };
  }
}
