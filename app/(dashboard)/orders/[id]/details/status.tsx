export default function Status({ label }: { label: string }) {
  return <span className="flex items-center justify-center px-3 h-5 rounded-2xl bg-[#05CF23]/15 text-[#05CF23] text-sm border-[0.5px] border-[#05CF23]/15">{label}</span>;
}
