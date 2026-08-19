"use client";

import { DetailRow } from "../types";

interface DetailsDataProps {
  data: DetailRow[];
}

export default function DetailsData({ data }: DetailsDataProps) {
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
    <div className="flex flex-col gap-1">
      {data.map((row) => (
        <div
          key={row.label}
          className="flex items-center justify-between gap-3 rounded-md px-1 -mx-1 hover:bg-black/5"
        >
          <span className="min-w-40 text-sm select-none">{row.label}:</span>
          <p className="truncate cursor-copy" onClick={handleCopy}>
            {row.value}
          </p>
        </div>
      ))}
    </div>
  );
}
