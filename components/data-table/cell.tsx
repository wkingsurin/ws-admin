"use client";

import { FormEvent, ReactNode, useState } from "react";
import { TableCell } from "../ui/table";
import CellValue from "./cell-value";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

interface CellProps {
  children: ReactNode;
  editValue?: string;
  className?: string;

  isCellActive: boolean;
  hovered: boolean;
  editable: boolean;
  maxSymbols?: number;
  handleCellClick: () => void;
  onSave?: (value: string) => void;
}

export default function Cell({
  children,
  className = "p-2",
  editValue,
  isCellActive,
  hovered,
  editable,
  handleCellClick,
  onSave,
  maxSymbols,
}: CellProps) {
  const [inputValue, setInputValue] = useState<string>(() =>
    String(editValue ?? ""),
  );
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const startEditing = () => {
    setInputValue(String(editValue ?? ""));
    setIsEditing(true);
  };
  const cancelEditing = () => {
    setInputValue(String(editValue ?? ""));
    setIsEditing(false);
  };
  const saveEditing = () => {
    console.log("Changes saved:", inputValue);
    onSave?.(inputValue);
    setIsEditing(false);
  };
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    saveEditing();
  };

  return (
    <TableCell
      className={`whitespace-normal ${isCellActive ? "bg-green-200" : "hover:bg-black/10"} ${isEditing && "bg-green-300"}`}
      onClick={() => {
        handleCellClick();
      }}
      onDoubleClick={() => {
        if (editable) {
          startEditing();
        }
      }}
    >
      <div className={`w-full whitespace-normal break-words ${className}`}>
        {isEditing ? (
          <form className="flex items-center w-full" onSubmit={onSubmit}>
            <Textarea
              value={inputValue}
              className="w-full min-h-8 p-0 rounded-none resize-none"
              onChange={(event) => setInputValue(event.target.value)}
              onBlur={cancelEditing}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  cancelEditing();
                  return;
                }
              }}
              maxLength={maxSymbols}
              autoFocus
            />
          </form>
        ) : hovered ? (
          <CellValue value={children} visible={hovered} />
        ) : (
          children
        )}
      </div>
    </TableCell>
  );
}
