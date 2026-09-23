import Image from "next/image";

export default function ImageCard({ src }: { src: string }) {
  return (
    <div className="flex flex-col w-60 h-full rounded-md overflow-hidden">
      <Image src={src} alt="product" width={240} height={320} className="w-full h-full" />
    </div>
  );
}
