import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";

export default function DeleteCustomersDialog() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <span>Delete customer?</span>
        <p>This action cannot be undone! You`re sure?</p>
      </div>
      <form className="flex flex-col items-start gap-4">
        <div className="flex gap-3 w-full">
          <DialogClose
            render={<Button className="w-1/2 px-4">Cancel</Button>}
          />
          <Button className="w-1/2 px-4" variant="destructive">
            Delete
          </Button>
        </div>
      </form>
    </div>
  );
}
