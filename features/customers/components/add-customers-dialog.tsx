import { Button } from "@/components/ui/button";

export default function AddCustomersDialog() {
  return (
    <div className="flex flex-col gap-4">
      <span>Add customer</span>
      <form className="flex flex-col items-start gap-4">
        <div className="flex flex-col gap-3 rounded-md bg-black/10 w-full p-3"></div>
        <Button className="min-w-60 px-4">Create</Button>
      </form>
    </div>
  );
}
