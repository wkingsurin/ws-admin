"use client";

import { Button } from "@/components/ui/button";

interface ResetFiltersDialogProps {
  onClick: () => void;
  onClose: () => void;
}

export default function ResetFiltersDialog({
  onClick,
  onClose,
}: ResetFiltersDialogProps) {
  return (
    <div className="flex flex-col gap-4">
      <span>Reset all filters?</span>
      <div className="flex flex-col items-start gap-4">
        <p>This action cannot be undone! You`re sure?</p>
        <div className="flex gap-3 w-full">
          <Button className="w-1/2 px-4" onClick={onClose}>
            Cancel
          </Button>
          <Button
            className="w-1/2 px-4"
            variant="destructive"
            onClick={() => {
              onClick();
              onClose();
            }}
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
}
