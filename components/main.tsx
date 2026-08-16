interface IProps {
    children: React.ReactNode;
}

export default function Main({ children }: IProps) {
    return <main className="ml-25">{children}</main>;
}
