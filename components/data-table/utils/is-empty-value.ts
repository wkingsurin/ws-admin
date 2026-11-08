export function isEmptyValue(value: unknown): boolean {
  return value == null || (typeof value === "string" && value.trim() === "");
}