"use client";

interface DataTableResizerProps {
  onPointerDown: (event: React.PointerEvent) => void;
}

export default function DataTableResizer({
  onPointerDown,
}: DataTableResizerProps) {
  return (
    <div
      onPointerDown={onPointerDown}
      className="absolute right-0 top-0 h-full w-[6px] cursor-col-resize select-none"
    ></div>
  );
}
