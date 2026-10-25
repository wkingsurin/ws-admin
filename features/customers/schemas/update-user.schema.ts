import { z } from "zod";

export const updateEmailSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, "Email обязателен")
    .max(254, "Email слишком длинный")
    .email("Некорректный email"),
});

export const updatePhoneSchema = z.object({
  phone: z.preprocess(
    (value) => {
      if (typeof value !== "string") return value;

      const phone = value.trim();

      if (!phone) return "";

      return phone.replace(/[\s().-]/g, "");
    },
    z.string().regex(/^\+?[1-9]\d{6,14}$/, "Введите корректный номер телефона"),
  ),
});
