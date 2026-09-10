import SearchBar from "./search";

export default function DashboardTable({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <SearchBar />
      {children}
    </div>
  );
}
