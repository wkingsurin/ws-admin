import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function CellImage({ alt, src }: { alt: string; src: string }) {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <button className="flex items-center justify-center w-10 h-10 rounded-sm border-[1px] border-[#E5E7EB] p-1 bg-white cursor-zoom-in">
            <Image
              src={src}
              alt={alt}
              width={45}
              height={60}
              className="w-full h-full object-contain"
            />
          </button>
        }
      />
      <DialogContent className="flex flex-col gap-4 min-w-[calc(720px+2rem)]">
        <DialogTitle>{alt}</DialogTitle>
        <div className="flex items-center justify-center w-full h-full">
          <div>
            <Image
              src={src}
              alt={alt}
              width={720}
              height={480}
              className="w-full h-full object-contain rounded-md"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
