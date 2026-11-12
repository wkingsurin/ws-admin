const ALLOWED_IMAGE_TYPES: Record<string, string> = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  avif: "image/avif",
};

type ValidationResult =
  | { valid: true }
  | {
      valid: false;
      reason: "extension" | "mime" | "corrupted";
    };

export type InvalidValidationResult = Extract<
  ValidationResult,
  { valid: false }
>;

export async function validateImageFile(file: File): Promise<ValidationResult> {
  const extension = file.name.split(".").pop()?.toLowerCase();

  if (!extension || !ALLOWED_IMAGE_TYPES[extension]) {
    return { valid: false, reason: "extension" };
  }

  const expectedMime = ALLOWED_IMAGE_TYPES[extension];

  if (file.type && file.type !== expectedMime) {
    return { valid: false, reason: "mime" };
  }

  try {
    const objectUrl = URL.createObjectURL(file);

    try {
      const img = new Image();
      img.src = objectUrl;

      await img.decode();

      if (img.naturalWidth === 0 || img.naturalHeight === 0) {
        return { valid: false, reason: "corrupted" };
      }

      return { valid: true };
    } finally {
      URL.revokeObjectURL(objectUrl);
    }
  } catch {
    return { valid: false, reason: "corrupted" };
  }
}
