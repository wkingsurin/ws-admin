"use client";

import { DetailRow } from "../types";

interface MetadataProps {
  data: DetailRow[];
}

export default function Metadata({ data }: MetadataProps) {
  const handleCopy = async (event: React.MouseEvent): Promise<void> => {
    const value = event.currentTarget.textContent;

    try {
      await navigator.clipboard.writeText(value);
      console.log(`Text is copied!`);
    } catch (err) {
      console.error(`Failed to copy text:`, value);
    }
  };

  return (
    <div className="flex gap-2">
      {data.map((row) => (
        <div
          key={row.label}
          className="flex items-center justify-center h-5 px-2 bg-[#F3F4F6] rounded-sm font-mono text-xs leading-[100%] cursor-copy"
          onClick={handleCopy}
        >
          {row.value}
        </div>
      ))}
    </div>
  );
}
