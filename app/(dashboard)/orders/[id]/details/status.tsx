export default function Status({ label }: { label: string }) {
  return (
    <span className="flex items-center justify-center px-2 h-5 rounded-sm bg-[#D0FAE5] text-[#006045] text-xs">
      {label}
    </span>
  );
}
