'use client';

type Props = {
    onClick: () => void;
    className?: string;
    text: string;
};

export default function Button({
    onClick,
    className,
    text,
}: Props) {
    return <button onClick={onClick} className={className}>{text}</button>;
}