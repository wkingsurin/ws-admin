"use client";

import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { TableCell } from "../ui/table";
import CellValue from "./cell-value";
import { Input } from "../ui/input";

interface CellProps {
  value: ReactNode;
  isCellActive: boolean;
  hovered: boolean;
  editable: boolean;
  handleCellClick: () => void;
}

export default function Cell({
  value,
  isCellActive,
  hovered,
  editable,
  handleCellClick,
}: CellProps) {
  const [inputValue, setInputValue] = useState<string>(() => String(value));
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleClose = (event: KeyboardEvent) => {
    if (event.key.toLowerCase() === "escape") {
      setIsEditing(false);
    }
  };
  const handleSave = (event: KeyboardEvent) => {
    if (event.key.toLowerCase() === "enter") {
      console.log(`Changes saved!`);
      setIsEditing(false);
    }
  };
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    setIsEditing(false);
  };

  useEffect(() => {
    window.document.addEventListener("keydown", handleClose);
    window.document.addEventListener("keydown", handleSave);

    return () => {
      window.document.removeEventListener("keydown", handleClose);
      window.document.removeEventListener("keydown", handleSave);
    };
  }, []);

  return (
    <TableCell
      className={`relative min-w-0 truncate ${isCellActive ? "bg-green-200" : "hover:bg-black/10"}`}
      onClick={() => {
        handleCellClick();
      }}
      onDoubleClick={() => setIsEditing(true)}
    >
      {editable && isEditing ? (
        <div className="absolute top-0 left-0 flex items-center w-60 min-h-[37px] px-2 bg-black/10">
          <form className="w-full h-full" onSubmit={onSubmit}>
            <Input
              value={inputValue}
              className="h-full py-0 px-2 rounded-none"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleChange(event)
              }
              autoFocus
            />
          </form>
        </div>
      ) : (
        <CellValue value={inputValue} visible={hovered} />
      )}
    </TableCell>
  );
}
