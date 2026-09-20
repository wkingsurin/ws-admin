import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";

export default function DeleteVariantDialog() {
  return (
    <div className="flex flex-col gap-4">
      <span>Delete variant?</span>
      <form className="flex flex-col items-start gap-4">
        <p>This action cannot be undone! You`re sure?</p>
        <div className="flex w-full gap-3">
          <DialogClose
            render={<Button className="w-1/2 px-4">Cancel</Button>}
          />
          <Button className="w-1/2 px-4" variant="destructive">
            Confirm
          </Button>
        </div>
      </form>
    </div>
  );
}
