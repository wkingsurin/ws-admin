import Dashboard from "@/components/dashboard/dashboard";

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Dashboard>{children}</Dashboard>;
}
