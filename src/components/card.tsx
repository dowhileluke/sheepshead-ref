import type { ReactNode } from 'react'
import { useAppState } from '../hooks/use-app-state'
import { concat } from '../functions/concat';

type CardProps = {
    rank: number;
    suit: number;
    className?: string;
    children?: ReactNode;
}

const cardStyle = 'w-[2.25em] h-[3.5em] p-0.5 font-bold bg-white border border-(--black) rounded-sm'

export function Card({ rank, suit, className, children }: CardProps) {
    const [{ ranks, suits, colors, }] = useAppState()
    const SuitIcon = suits[suit]

    return (
        <li className={concat(cardStyle, colors[suit], className)}>
            {ranks[rank]}
            <SuitIcon weight="fill" />
            {children}
        </li>
    )
}
