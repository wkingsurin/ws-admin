export default function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`p-3 rounded-md bg-[#F8F9FA] min-w-[120px] min-h-[180px] ${className}`}>
      {children}
    </div>
  );
}
