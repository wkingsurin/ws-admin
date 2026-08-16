import Link from "next/link";
import NavigationButton from "./navigation-button";

export default function Navigation() {
  return (
    <nav className="flex gap-1">
      <NavigationButton direction="left" />
      <NavigationButton direction="right" />
    </nav>
  );
}
