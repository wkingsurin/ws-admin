import Image from "next/image";

interface ImageCardProps {
  className?: string;
  alt: string;
  src: string;
  placholder?: string;
}

export default function ImageCard({
  className = "",
  alt,
  src,
  placholder = '*Отсутствует изображение',
}: ImageCardProps) {
  if (src === "/" || src === undefined || src === "") {
    return (
      <div className="flex items-center justify-center text-gray-400 text-sm select-none">
        {placholder}
      </div>
    );
  }

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
        priority
      />
    </div>
  );
}
