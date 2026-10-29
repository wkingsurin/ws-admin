export default function normalizeFilterValue(value: unknown): string {
  if (typeof value === "boolean") {
    return value ? "true" : "false";
  }

  return String(value ?? "");
}
