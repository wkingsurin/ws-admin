interface IProps {
    children: React.ReactNode;
}

export default function Main({ children }: IProps) {
    return <main className="ml-10 py-4">{children}</main>;
}
