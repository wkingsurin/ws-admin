import Container from "../container";
import Section from "../section";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-3">
          {children}
        </div>
      </Container>
    </Section>
  );
}
