import {
  Brand,
  Category,
  ProductColor,
} from "@/prisma/generated/prisma/client";

type GenereateSkuInput = {
  brand: Brand;
  category: Category;
  productName: string;
  color: Pick<ProductColor, "name">;
  size: string;
};

function normalizePart(value: string): string {
  const transliteration: Record<string, string> = {
    а: "A",
    б: "B",
    в: "V",
    г: "G",
    д: "D",
    е: "E",
    ё: "E",
    ж: "ZH",
    з: "Z",
    и: "I",
    й: "Y",
    к: "K",
    л: "L",
    м: "M",
    н: "N",
    о: "O",
    п: "P",
    р: "R",
    с: "S",
    т: "T",
    у: "U",
    ф: "F",
    х: "H",
    ц: "TS",
    ч: "CH",
    ш: "SH",
    щ: "SHCH",
    ъ: "",
    ы: "Y",
    ь: "",
    э: "E",
    ю: "YU",
    я: "YA",
  };

  return value
    .trim()
    .toLowerCase()
    .replace(/[а-яё]/g, (char) => transliteration[char] ?? char)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "");
}

export default function generateSKU({
  brand,
  category,
  productName,
  color,
  size,
}: GenereateSkuInput) {
  const brandCode = normalizePart(brand.name).slice(0, 4);
  const categoryCode = normalizePart(category.name).slice(0, 4);
  const productCode = normalizePart(productName).slice(0, 4);
  const colorCode = normalizePart(color.name).slice(0, 4);
  const sizeCode = normalizePart(size).slice(0, 4);

  const parts = [brandCode, categoryCode, productCode, colorCode, sizeCode];

  if (parts.some((part) => !part)) {
    throw new Error("Не удалось сформировать SKU: проверь данные товара");
  }

  return parts.join("-");
}
