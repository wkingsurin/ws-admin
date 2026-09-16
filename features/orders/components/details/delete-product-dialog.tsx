import { Button } from "@/components/ui/button";

export default function DeleteProductDialog() {
  return (
    <div className="flex flex-col gap-4">
      <span>Delete product?</span>
      <form className="flex flex-col items-start gap-4">
        <p>This action cannot be undone! You`re sure?</p>
        <div className="flex w-full gap-3">
          <Button className="w-1/2 px-4">Cancel</Button>
          <Button className="w-1/2 px-4" variant="destructive">
            Delete
          </Button>
        </div>
      </form>
    </div>
  );
}
