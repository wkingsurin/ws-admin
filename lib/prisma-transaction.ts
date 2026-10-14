import { Prisma } from "@/prisma/generated/prisma/client";
import { prisma } from "./prisma";

export async function runSerializableTransaction<T>(
  callback: (tx: Prisma.TransactionClient) => Promise<T>,
): Promise<T> {
  const maxAttempts = 3;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await prisma.$transaction(callback, {
        isolationLevel: "Serializable",
      });
    } catch (error) {
      const isSerializationConflict =
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2034";

      if (!isSerializationConflict || attempt === maxAttempts) {
        throw error;
      }
    }
  }

  throw new Error("Транзакция не выполнена");
}
