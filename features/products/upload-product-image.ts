"use server";

import { supabaseStorage } from "@/lib/supabase-storage";

const BUCKET = "product-images";
const MAX_FILE_SIZE = 5 * 1024 * 1024;

const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp"]);

export async function uploadProductImage(formData: FormData) {
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return { error: "Файл не передан" };
  }

  if (!allowedTypes.has(file.type)) {
    return { error: "Поодерживаются только форматы: JPEG, PNG, WEBP" };
  }

  if (file.size > MAX_FILE_SIZE) {
    return { error: "Размер изображения не должен превышать 5 MB" };
  }

  const extenstionByType: Record<string, string> = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
  };

  const path = `${crypto.randomUUID()}.${extenstionByType[file.type]}`;

  const { error } = await supabaseStorage.storage
    .from(BUCKET)
    .upload(path, await file.arrayBuffer(), {
      contentType: file.type,
      upsert: false,
    });

  if (error) {
    console.error("Supabase image upload error:", error.message);
    return { error: "Не удалось загрузить изображение" };
  }

  const { data } = supabaseStorage.storage.from(BUCKET).getPublicUrl(path);

  return { url: data.publicUrl, path };
}
