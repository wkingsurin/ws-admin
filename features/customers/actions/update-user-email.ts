"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { updateEmailSchema } from "../schemas/update-user.schema";
import { Prisma } from "@/prisma/generated/prisma/client";
import { ActionResult } from "@/features/shared/action-result";

export async function updateUserEmail(
  userId: string,
  input: unknown,
): Promise<ActionResult> {
  const parsed = updateEmailSchema.safeParse(input);

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.issues[0]?.message ?? "Некорректный email",
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
        success: false,
        message: "Этот email уже используется",
      };
    }

    await prisma.user.update({
      where: { id: userId },
      data: { email },
    });

    revalidatePath(`/customers/`);
    revalidatePath(`/customers/${userId}`);

    return { success: true, message: "Email успешно обновлён" };
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return {
        success: false,
        message: "Этот email уже используется",
      };
    }

    console.error(`Failed to update user email:`, error);

    return {
      success: false,
      message: "Не удалось изменить email",
    };
  }
}
