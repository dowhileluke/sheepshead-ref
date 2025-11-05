import { useAppState } from '../hooks/use-app-state'
import { concat } from '../functions/concat'
// import { Eyes } from './eyes'

type CardProps = {
    rank: number;
    suit: number;
    eyes?: number;
    className?: string;
}

const cardStyle = 'w-[2.25em] h-[3.5em] p-0.5 flex flex-col font-bold bg-white border border-(--black) rounded-sm'

export function Card({ rank, suit, eyes, className }: CardProps) {
    const [{ ranks, suits, colors, }] = useAppState()
    const SuitIcon = suits[suit]

    return (
        <li className={concat(cardStyle, colors[suit], className)}>
            <span className="tracking-[-0.1em]">{ranks[rank]}</span>
            <SuitIcon weight="fill" />
            {/* <div className="grow" /> */}
            {/* <Eyes count={eyes} squeeze /> */}
        </li>
    )
}
