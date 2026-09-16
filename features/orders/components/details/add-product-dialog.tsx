import { Button } from "@/components/ui/button";

export default function AddProductDialog() {
  const emptyProducts: { label: string }[] = [];

  return (
    <div className="flex flex-col gap-4">
      <span>Add products</span>
      <form className="flex flex-col items-start gap-4">
        <div className="flex flex-col gap-3 rounded-md bg-black/10 w-full p-3">
          <span>Products</span>
          {emptyProducts.length < 1 ? (
            <div className="flex items-center justify-center min-h-46">
              <Button className="min-w-45 px-4 bg-transparent border-black/20 text-black/50 hover:text-white">
                Add products
              </Button>
            </div>
          ) : (
            <div className="flex gap-3">
              <div className="bg-white rounded-md min-w-30 min-h-46"></div>
              <div className="bg-white rounded-md min-w-30 min-h-46"></div>
              <div className="bg-white rounded-md min-w-30 min-h-46"></div>
              <div className="bg-white rounded-md min-w-30 min-h-46"></div>
              <div className="bg-white rounded-md min-w-30 min-h-46"></div>
            </div>
          )}
        </div>
        <Button className="min-w-60 px-4">Create</Button>
      </form>
    </div>
  );
}
