import Container from "../container";
import Section from "../section";
import TopBar from "./topbar";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-3">
          <TopBar />
          {children}
        </div>
      </Container>
    </Section>
  );
}
