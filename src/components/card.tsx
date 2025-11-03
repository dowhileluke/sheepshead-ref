import type { ComponentPropsWithRef } from "react";

type CardProps =ComponentPropsWithRef<'div'> & {
    rank: number;
    suit: number;
}

const cardStyle = 'w-[2.25em] h-[3.5em] bg-white border border-(--black) rounded-sm'

export function Card({ rank, suit, className, ...props }: CardProps) {
    return (
        <div className={[cardStyle, className].join(' ')} {...props} />
    )
}
