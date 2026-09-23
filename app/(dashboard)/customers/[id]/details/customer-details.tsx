import { DetailRow } from "@/app/(dashboard)/orders/[id]/types";
import DetailsCard from "./card";
import ImageCard from "./image-card";

export default function CustomerDetails() {
  const product: DetailRow[] = [
    { label: "Id", value: "cms0hunvx001c2wua6bidro7m" },
    { label: "Name", value: "Jane Doe" },
    { label: "Email", value: "janedoe@example.com" },
    { label: "Recipient", value: "null" },
    { label: "Country", value: "null" },
    { label: "City", value: "null" },
    { label: "Street", value: "null" },
    { label: "PostalCode", value: "null" },
    { label: "Phone", value: "null" },
    { label: "Created at", value: "2026-07-25 14:59:19" },
  ];

  const image: { alt: string; src: string } = {
    alt: "Under Armour Hoodie",
    src: "/products/hoodies/under-armour-white/image-1-480.png",
  };

  return (
    <div className="flex gap-10">
      <ImageCard src={image.src} />
      <DetailsCard title="Customer" data={product} />
    </div>
  );
}
