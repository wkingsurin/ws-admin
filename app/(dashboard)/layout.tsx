import Main from "@/components/main";
import TableReset from "./table-reset";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Main>
      <TableReset />
      {children}
    </Main>
  );
}
