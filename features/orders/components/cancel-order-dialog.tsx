import { Button } from "@/components/ui/button";

interface CancelOrderDialogProps {
  onClick: () => void;
  onClose: () => void;
}

export default function CancelOrderDialog({
  onClick,
  onClose,
}: CancelOrderDialogProps) {
  return (
    <div className="flex flex-col gap-4">
      <span>Cancel order?</span>
      <form className="flex flex-col items-start gap-4">
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
      </form>
    </div>
  );
}
