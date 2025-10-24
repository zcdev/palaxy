'use client';

import clsx from "clsx";

type Props = {
    onClick?: () => void;
    className?: string;
    text: string;
    data?: string;
    type?: 'button' | 'submit' | 'reset';
};

export default function Button({
    onClick,
    className,
    text,
    data,
    type,
}: Props) {
    return <button type={type} data-state={data} onClick={onClick}
        className={clsx(
            "min-h-[44px]",
            "cursor-pointer w-full sm:w-auto",
            "data-[state=on]:bg-white/40 data-[state=on]:text-white data-[state=on]:border-transparent",
            className
        )}>{text}</button>;
}