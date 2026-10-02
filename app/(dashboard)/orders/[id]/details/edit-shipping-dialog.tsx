import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EditShippingProps {
  title: string;
  description?: string;
}

export default function EditShippingDialog({
  title,
  description,
}: EditShippingProps) {
  return (
    <div className="flex flex-col gap-4">
      <span>{title}</span>
      <form className="flex flex-col items-start gap-4">
        {description && <p>{description}</p>}
        <div className="flex flex-col gap-3 rounded-md bg-black/5 w-full p-3">
          <div className="grid grid-cols-2 gap-3">
            <Label
              htmlFor="shipping-address"
              className="flex flex-col items-start gap-[6px]"
            >
              Address
              <Input
                id="shipping-address"
                className="bg-white px-4"
                placeholder="Address..."
              />
            </Label>
            <Label
              htmlFor="city"
              className="flex flex-col items-start gap-[6px]"
            >
              City
              <Input
                id="city"
                className="bg-white px-4"
                placeholder="City..."
              />
            </Label>
            <Label
              htmlFor="country"
              className="flex flex-col items-start gap-[6px]"
            >
              Country
              <Input
                id="country"
                className="bg-white px-4"
                placeholder="Country..."
              />
            </Label>
            <Label
              htmlFor="postal-code"
              className="flex flex-col items-start gap-[6px]"
            >
              Postal code
              <Input
                id="postal-code"
                className="bg-white px-4"
                placeholder="Postal code..."
              />
            </Label>
          </div>
        </div>
        <div className="flex justify-end w-full gap-3">
          <Button className="w-1/2 px-4">Confirm</Button>
        </div>
      </form>
    </div>
  );
}
