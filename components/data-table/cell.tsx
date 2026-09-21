"use client";

import { ChangeEvent, FormEvent, ReactNode, useState } from "react";
import { TableCell } from "../ui/table";
import CellValue from "./cell-value";
import { Input } from "../ui/input";

interface CellProps {
  children: ReactNode;
  editValue?: string;
  className?: string;

  isCellActive: boolean;
  hovered: boolean;
  editable: boolean;
  handleCellClick: () => void;
  onSave?: (value: string) => void;
}

export default function Cell({
  children,
  className = "px-2",
  editValue,
  isCellActive,
  hovered,
  editable,
  handleCellClick,
  onSave,
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

  console.log(`inputValue:`, inputValue);

  return (
    <TableCell
      className={`relative min-w-0 ${isCellActive ? "bg-green-200" : "hover:bg-black/10"} ${className}`}
      onClick={() => {
        handleCellClick();
      }}
      onDoubleClick={() => {
        if (editable) {
          startEditing();
        }
      }}
    >
      {isEditing ? (
        <div className="absolute top-0 left-0 flex items-center w-60 min-h-[37px] h-full bg-black/10">
          <form className="w-full h-full" onSubmit={onSubmit}>
            <Input
              value={inputValue}
              className="h-full py-0 px-2 rounded-none"
              onChange={(event) => setInputValue(event.target.value)}
              onBlur={cancelEditing}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  cancelEditing();
                  return;
                }
              }}
              autoFocus
            />
          </form>
        </div>
      ) : hovered && editable ? (
        <CellValue value={children} visible={hovered} />
      ) : (
        children
      )}
    </TableCell>
  );
}
