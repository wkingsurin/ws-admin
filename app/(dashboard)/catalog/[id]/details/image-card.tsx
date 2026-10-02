import Image from "next/image";

export default function ImageCard({
  className = "",
  alt,
  src,
}: {
  className?: string;
  alt: string;
  src: string;
}) {
  return (
    <div
      className={`flex flex-col w-auto h-full rounded-md overflow-hidden ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={240}
        height={320}
        className="w-full h-full"
      />
    </div>
  );
}
