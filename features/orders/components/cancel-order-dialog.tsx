import { Button } from "@/components/ui/button";

export default function CancelOrderDialog() {
  return (
    <div className="flex flex-col gap-4">
      <span>Cancel order?</span>
      <form className="flex flex-col items-start gap-4">
        <p>This action cannot be undone! You`re sure?</p>
        <div className="flex gap-3 w-full">
          <Button className="w-1/2 px-4">Cancel</Button>
          <Button className="w-1/2 px-4" variant="destructive">
            Confirm
          </Button>
        </div>
      </form>
    </div>
  );
}
