import SearchBar from "./search";

export default function DashboardContent({
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
