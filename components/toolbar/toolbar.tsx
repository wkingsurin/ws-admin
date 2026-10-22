"use client";

import ToolButton from "./tool-button";
import { Tool } from "./types";

export default function Toolbar({
  serviceTools,
  tools,
}: {
  serviceTools?: Tool[];
  tools: Tool[];
}) {
  return (
    <div className="flex justify-between gap-3 w-full">
      <div className="flex items-center gap-1 min-h-0">
        {tools.map((tool) => (
          <ToolButton
            key={tool.label}
            icon={tool.icon}
            onClick={tool.onClick}
            className="px-0 bg-white border-[#E5E7EB] hover:bg-black/5! text-black hover:text-black"
            size={tool.dialogSize ?? "auto"}
          >
            {tool.dialog}
          </ToolButton>
        ))}
      </div>
      <div className="flex items-center gap-1 min-h-0">
        {serviceTools &&
          serviceTools.map((tool) => (
            <ToolButton
              key={tool.label}
              icon={tool.icon}
              label={tool.label}
              onClick={tool.onClick}
              className="w-auto px-3"
              size={tool.dialogSize ?? "md"}
            >
              {tool.dialog}
            </ToolButton>
          ))}
      </div>
    </div>
  );
}
