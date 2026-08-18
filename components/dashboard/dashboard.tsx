import Container from "../container";
import Section from "../section";
import DashboardContent from "./dashboard-content";
import TopBar from "./topbar";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-3">
          <TopBar />
          <DashboardContent>{children}</DashboardContent>
        </div>
      </Container>
    </Section>
  );
}
