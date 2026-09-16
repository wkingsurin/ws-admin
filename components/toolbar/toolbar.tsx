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
      <div className="flex items-center gap-1 min-h-0 h-10">
        {serviceTools &&
          serviceTools.map((tool) => (
            <ToolButton
              key={tool.label}
              icon={tool.icon}
              label={tool.label}
              onClick={tool.onClick}
              className="w-auto px-3 bg-white"
              size="md"
            >
              {tool.dialog}
            </ToolButton>
          ))}
      </div>
      <div className="flex items-center gap-1 min-h-0 h-10">
        {tools.map((tool) => (
          <ToolButton
            key={tool.label}
            icon={tool.icon}
            onClick={tool.onClick}
            label={tool.label}
            className="w-auto px-3 bg-red-500/30 hover:bg-red-500/50 hover:text-red-500 hover:border-red-500/50"
            size="auto"
          >
            {tool.dialog}
          </ToolButton>
        ))}
      </div>
    </div>
  );
}
