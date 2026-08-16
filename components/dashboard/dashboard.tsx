import Container from "../container";
import Section from "../section";
import SearchBar from "./search";
import TopBar from "./topbar";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-3">
          <TopBar />
          <SearchBar />
          {children}
        </div>
      </Container>
    </Section>
  );
}
