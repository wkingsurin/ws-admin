interface IProps {
    children: React.ReactNode;
}

export default function Section({ children }: IProps) {
    return <section>{children}</section>;
}
