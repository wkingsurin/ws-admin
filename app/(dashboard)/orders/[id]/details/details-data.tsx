"use client";

import { DetailRow } from "../types";

interface DetailsDataProps {
  data: DetailRow[];
  mode?: "light" | "dark";
}

export default function DetailsData({
  data,
  mode = "light",
}: DetailsDataProps) {
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
    <div className="flex flex-col gap-1 text-xs leading-[1rem]">
      {data.map((row) => (
        <div
          key={row.label}
          className="flex items-center justify-between gap-3"
        >
          <span
            className={`w-1/3 ${mode === "light" ? "text-[#99A1AF]" : "text-[#99A1AF]"} select-none`}
          >
            {row.label}:
          </span>
          <div className="flex items-center">
            <p
              className={`truncate cursor-copy rounded-md px-1 -mx-1 ${mode === 'light' ? 'text-black' : 'text-[#99A1AF]'} hover:bg-black/5`}
              onClick={handleCopy}
            >
              {row.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
