export default function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`p-6 rounded-2xl bg-[#F8F9FA] min-w-[120px] min-h-[180px] border-[0.5px] border-black/10 ${className}`}
    >
      {children}
    </div>
  );
}
