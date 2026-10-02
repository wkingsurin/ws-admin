import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EditCustomerProps {
  title: string;
  description?: string;
}

export default function EditCustomerDialog({
  title,
  description,
}: EditCustomerProps) {
  return (
    <div className="flex flex-col gap-4">
      <span>{title}</span>
      <form className="flex flex-col items-start gap-4">
        {description && <p>{description}</p>}
        <div className="flex flex-col gap-3 rounded-md bg-black/5 w-full p-3">
          <div className="grid grid-cols-2 gap-3">
            <Label
              htmlFor="customer-name"
              className="flex flex-col items-start gap-[6px] text-xs"
            >
              Name
              <Input
                id="customer-name"
                className="bg-white px-4"
                placeholder="Name..."
              />
            </Label>
            <Label
              htmlFor="email"
              className="flex flex-col items-start gap-[6px] text-xs"
            >
              Email
              <Input
                id="email"
                className="bg-white px-4"
                placeholder="Email..."
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
