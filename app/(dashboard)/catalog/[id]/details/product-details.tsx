import { DetailRow } from "@/app/(dashboard)/orders/[id]/types";
import DetailsCard from "./card";
import ImageCard from "./image-card";

export default function ProductDetails() {
  const product: DetailRow[] = [
    { label: "Id", value: "cms0hvxjm006h3wuakimzot9p" },
    { label: "title", value: "Under Armour Hoodie" },
    { label: "Brand", value: "Unuder Armour" },
    { label: "Category", value: "hoodie" },
    { label: "Stock", value: "7" },
    { label: "Price", value: "7790" },
    { label: "Old price", value: "9790" },
    { label: "Created at", value: "2026-07-25 14:59:19" },
    { label: "Updated at", value: "2026-07-25 14:59:19" },
  ];

  const image: { alt: string; src: string } = {
    alt: "Under Armour Hoodie",
    src: "/products/hoodies/under-armour-white/image-1-480.png",
  };

  return (
    <div className="flex gap-10">
      <ImageCard src={image.src} />
      <DetailsCard title="Product" data={product} />
    </div>
  );
}
