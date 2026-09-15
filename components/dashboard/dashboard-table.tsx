import SearchBar from "./search";

export default function DashboardTable({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div className={`flex flex-col min-h-0 ${className ?? ""}`}>
      <SearchBar />

      <div className="flex-1 min-h-0">{children}</div>
    </div>
  );
}
