"use client";

import { ChangeEvent, FormEvent, ReactNode, useState } from "react";
import { TableCell } from "../ui/table";
import CellValue from "./cell-value";
import { Input } from "../ui/input";

interface CellProps {
  children: ReactNode;
  editValue?: ReactNode;
  className?: string;

  isCellActive: boolean;
  hovered: boolean;
  editable: boolean;
  handleCellClick: () => void;
}

export default function Cell({
  children,
  className = "px-2",
  editValue,
  isCellActive,
  hovered,
  editable,
  handleCellClick,
}: CellProps) {
  const [inputValue, setInputValue] = useState<string>(() => String(editValue));
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    setIsEditing(false);
  };

  return (
    <TableCell
      className={`relative min-w-0 ${isCellActive ? "bg-green-200" : "hover:bg-black/10"} ${className}`}
      onClick={() => {
        handleCellClick();
      }}
      onDoubleClick={() => setIsEditing(true)}
    >
      {!hovered && editable && isEditing && (
        <div className="absolute top-0 left-0 flex items-center w-60 min-h-[37px] bg-black/10">
          <form className="w-full h-full" onSubmit={onSubmit}>
            <Input
              value={inputValue}
              className="h-full py-0 px-2 rounded-none"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleChange(event)
              }
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  setIsEditing(false);
                }

                if (event.key === "Enter") {
                  console.log("Changes saved:", inputValue);
                  setIsEditing(true);
                }
              }}
              autoFocus
            />
          </form>
        </div>
      )}
      {hovered ? <CellValue value={children} visible={hovered} /> : children}
    </TableCell>
  );
}
