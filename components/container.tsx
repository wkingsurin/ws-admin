interface IProps {
    children: React.ReactNode;
}

export default function Container({ children }: IProps) {
    return <div className="max-w-[(100dvh-100px)] w-full px-4 mx-auto">{children}</div>;
}
