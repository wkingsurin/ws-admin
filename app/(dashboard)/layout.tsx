import Dashboard from "@/components/dashboard/dashboard";
import Main from "@/components/main";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Main>
      <Dashboard>{children}</Dashboard>
    </Main>
  );
}
