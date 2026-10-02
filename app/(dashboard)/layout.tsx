import Main from "@/components/main";
import SelectionReset from "./selection-reset";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Main>
      <SelectionReset />
      {children}
    </Main>
  );
}
