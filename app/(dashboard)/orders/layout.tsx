import Dashboard from "@/components/dashboard/dashboard";

export default function OrdersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Dashboard>{children}</Dashboard>;
}
