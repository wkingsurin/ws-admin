interface IProps {
    children: React.ReactNode;
}

export default function Main({ children }: IProps) {
    return <main className="ml-10 py-4 h-dvh overflow-hidden">{children}</main>;
}
