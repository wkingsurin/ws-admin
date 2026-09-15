interface IProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className }: IProps) {
  return <section className={`${className ?? ""}`}>{children}</section>;
}
