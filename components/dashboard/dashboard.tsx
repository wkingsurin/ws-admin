import Container from "../container";
import Section from "../section";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <Section className="h-full">
      <Container className="h-full">
        <div className="flex flex-col gap-3 h-full min-h-0">
          {children}
        </div>
      </Container>
    </Section>
  );
}
