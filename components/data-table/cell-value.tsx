import { CheckCheck, Copy } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { useState } from "react";

interface CellValueProps {
  value: React.ReactNode;
  visible?: boolean;
}

export default function CellValue({
  value,
  visible = false,
}: CellValueProps) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = async (value: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
      console.log(`Text is copied!`);
    } catch (err) {
      console.error(`Failed to copy text:`, value);
    }
  };

  return (
    <div className="relative flex min-w-0 w-full h-full">
      <HoverCard>
        <HoverCardTrigger
          render={
            <span
              className={`block min-w-0 w-full whitespace-normal break-words`}
            >
              {value}
            </span>
          }
        ></HoverCardTrigger>

        <HoverCardContent
          className={`relative flex items-center justify-between ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        >
          <span className="block min-w-0 w-full">{value}</span>
          <button onClick={() => handleCopy(String(value))}>
            {isCopied ? (
              <CheckCheck className="size-4 stroke-[1.5px]" />
            ) : (
              <Copy className="size-4 stroke-[1.5px]" />
            )}
          </button>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
