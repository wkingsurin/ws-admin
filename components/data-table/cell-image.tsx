import Image from "next/image";

export default function CellImage({ alt, src }: { alt: string; src: string }) {
  return (
    <div className="flex items-center justify-center">
      <Image src={src} alt={alt} width={45} height={60} />
    </div>
  );
}
