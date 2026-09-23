import Dashboard from "@/components/dashboard/dashboard";

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Dashboard>{children}</Dashboard>;
}
