import useEmblaCarousel from "embla-carousel-react";
import { MoveLeft, MoveRight, X } from "lucide-react";
import Image from "next/image";
import { ReactNode, useCallback, useEffect, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";

interface CarouselProps {
  images: File[];
  previews: string[];
  onImageDelete: (index: number) => void;
  children?: ReactNode;
}

export function Carousel({
  images,
  previews,
  onImageDelete,
  children,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    containScroll: "trimSnaps",
  });

  const [canScrollPrev, setCanScrollPrev] = useState<boolean>(false);
  const [canScrollNext, setCanScrollNext] = useState<boolean>(false);
  const [isScrollable, setIsScrollable] = useState<boolean>(false);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const updateCarouselState = useCallback(
    (api: EmblaCarouselType) => {
      const scrollable = api.scrollSnapList().length > 1;
      setIsScrollable(scrollable);

      api.reInit({ watchDrag: scrollable });

      onSelect(api);
    },
    [onSelect],
  );

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("init", updateCarouselState);
    emblaApi.on("resize", updateCarouselState);
    emblaApi.on("select", onSelect);

    updateCarouselState(emblaApi);

    return () => {
      emblaApi.off("init", updateCarouselState);
      emblaApi.off("resize", updateCarouselState);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, updateCarouselState, onSelect, images, children]);

  return (
    <div className="embla relative">
      <div className="embla__viewport w-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex justify-start gap-2">
          {images.map((file, index) => (
            <div key={`${file.name}-${index}`} className="flex-none w-18">
              <div className="group/upload-image relative w-full h-24 rounded-lg overflow-hidden border border-[#D1D5DC] bg-white">
                {previews[index] && (
                  <Image
                    src={previews[index]}
                    alt={file.name}
                    fill
                    unoptimized
                    className="object-cover transform-gpu scale-101 select-none"
                    sizes="72px"
                  />
                )}

                <button
                  type="button"
                  aria-label={`Удалить изображение ${file.name}`}
                  className="absolute top-0 right-0 z-10 flex items-center justify-center size-5 rounded-sm text-white pointer-events-none opacity-0 bg-black group-hover/upload-image:pointer-events-auto group-hover/upload-image:opacity-100 transition duration-100"
                  onClick={() => onImageDelete(index)}
                >
                  <X className="size-3" />
                </button>
              </div>
            </div>
          ))}
          {children && (
            <div className="flex-none w-18">
              <div className="w-full h-24">{children}</div>
            </div>
          )}
        </div>
      </div>

      {isScrollable && (
        <>
          {canScrollPrev && (
            <button
              className="embla__prev absolute top-[calc(96px/2-16px/2)] flex items-center justify-center w-[30px] h-[30px] rounded-full bg-white border-[0.5px] border-black/10"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                scrollPrev();
              }}
            >
              <MoveLeft className="size-4 stroke-[1.5px]" />
            </button>
          )}

          {canScrollNext && (
            <button
              className="embla__next absolute top-[calc(96px/2-30px/2)] right-0 flex items-center justify-center w-[30px] h-[30px] rounded-full bg-white border-[0.5px] border-black/10"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                scrollNext();
              }}
            >
              <MoveRight className="size-4 stroke-[1.5px]" />
            </button>
          )}
        </>
      )}
    </div>
  );
}
