import { useAppState } from '../hooks/use-app-state'
import { concat } from '../functions/concat'

type CardProps = {
    rank: number;
    suit: number;
    className?: string;
}

const cardStyle = '\
w-[2.25em] h-[3.5em] p-0.5 -me-[0.75em] last:me-0 \
flex flex-col \
font-bold bg-white border border-(--black) rounded-sm shadow-md'

export function Card({ rank, suit, className }: CardProps) {
    const [{ ranks, suits, colors, }] = useAppState()
    const SuitIcon = suits[suit]

    return (
        <li className={concat(cardStyle, colors[suit], className)}>
            <span className="tracking-[-0.1em]">{ranks[rank]}</span>
            <SuitIcon weight="fill" />
        </li>
    )
}
