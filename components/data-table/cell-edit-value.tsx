import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

interface CellEditValueProps {
  value: React.ReactNode;
  visible?: boolean;
}

export default function CellEditValue({
  value,
  visible = false,
}: CellEditValueProps) {
  return (
    <div className="relative flex min-w-0 w-full">
      <HoverCard>
        <HoverCardTrigger
          render={
            <span className="block min-w-0 w-full truncate">{value}</span>
          }
        ></HoverCardTrigger>

        <HoverCardContent
          className={`${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        >
          <span className="block min-w-0 w-full">{value}</span>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
