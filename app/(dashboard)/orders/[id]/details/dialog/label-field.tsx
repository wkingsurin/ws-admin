import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LabelFieldProps {
  label: string;
  initialValue: string;
  onChange: (value: string) => void;
}

export default function LabelField({
  label,
  initialValue,
  onChange,
}: LabelFieldProps) {
  return (
    <div className="group/label flex flex-col items-start gap-[6px]">
      <Label
        key={label}
        htmlFor={`customer-${label}`}
        className="text-xs text-[#6A7282]"
      >
        {label}
      </Label>
      <Input
        id={`customer-${label}`}
        className="bg-white px-4 bg-[#F9FAFB] border-[1px] border-[#E5E7EB] placeholder:text-[#4A5565]/50 group-has-focus/label:ring-2 ring-black/50 transition group-has-focus/label:border-transparent duration-100"
        placeholder={`${label}...`}
        value={initialValue}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
