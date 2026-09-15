interface IProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: IProps) {
  return (
    <div
      className={`max-w-[(100dvh-40px)] w-full px-4 mx-auto ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
