"use client";

import ToolButton from "./tool-button";
import { Tool } from "./types";

export default function Toolbar({ tools }: { tools: Tool[] }) {
  return (
    <div className="flex gap-1">
      {tools.map((tool) => (
        <ToolButton key={tool.label} icon={tool.icon} onClick={tool.onClick} />
      ))}
    </div>
  );
}
