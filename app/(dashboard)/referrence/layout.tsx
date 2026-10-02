import { ReactNode } from "react";

export default function ReferrenceLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div>{children}</div>;
}
