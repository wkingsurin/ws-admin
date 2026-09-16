import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CreateOrderDialog() {
  const emptyProducts: { label: string }[] = [];

  return (
    <div className="flex flex-col gap-4">
      <span>Create order</span>
      <form className="flex flex-col items-start gap-4">
        <div className="flex flex-col gap-3 rounded-md bg-black/10 w-full p-3">
          <span>Details</span>
          <div className="grid grid-cols-2 gap-3">
            <Label
              htmlFor="order-numuber"
              className="flex flex-col items-start gap-[6px]"
            >
              Order number
              <Input
                id="order-numuber"
                className="bg-white px-4"
                placeholder="Number..."
              />
            </Label>
            <Label
              htmlFor="username"
              className="flex flex-col items-start gap-[6px]"
            >
              Username
              <Input
                id="username"
                className="bg-white px-4"
                placeholder="Username..."
              />
            </Label>
          </div>
        </div>
        <div className="flex flex-col gap-3 rounded-md bg-black/10 w-full p-3">
          <span>Shipping address</span>
          <div className="grid grid-cols-2 gap-3">
            <Label
              htmlFor="order-numuber"
              className="flex flex-col items-start gap-[6px]"
            >
              Address
              <Input
                id="order-numuber"
                className="bg-white px-4"
                placeholder="Address..."
              />
            </Label>
            <Label
              htmlFor="username"
              className="flex flex-col items-start gap-[6px]"
            >
              City
              <Input
                id="username"
                className="bg-white px-4"
                placeholder="City..."
              />
            </Label>
            <Label
              htmlFor="username"
              className="flex flex-col items-start gap-[6px]"
            >
              Country
              <Input
                id="username"
                className="bg-white px-4"
                placeholder="Country..."
              />
            </Label>
            <Label
              htmlFor="username"
              className="flex flex-col items-start gap-[6px]"
            >
              Postal Code
              <Input
                id="username"
                className="bg-white px-4"
                placeholder="Postal code..."
              />
            </Label>
            <Label
              htmlFor="username"
              className="flex flex-col items-start gap-[6px]"
            >
              Payment method
              <Input
                id="username"
                className="bg-white px-4"
                placeholder="Payment method..."
              />
            </Label>
            <Label
              htmlFor="username"
              className="flex flex-col items-start gap-[6px]"
            >
              Delivery method
              <Input
                id="username"
                className="bg-white px-4"
                placeholder="Delivery method..."
              />
            </Label>
          </div>
        </div>
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
