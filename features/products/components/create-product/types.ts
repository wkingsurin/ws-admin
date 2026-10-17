import { ProductVariantDraft } from "./table";

export interface ProductColorDraft {
  id: string;
  name: string;
  variants: ProductVariantDraft[];
  images: File[];
}
