import { useAppState } from '../hooks/use-app-state'
import { concat } from '../functions/concat'
import { LIBRARY } from '../const';

type CardProps = {
    rank: number;
    suit?: number | null;
    className?: string;
}

const cardStyle = 'w-[2.25em] h-[3.5em] p-0.5 -me-[0.75em] last:me-0 bg-white border border-(--black) rounded-sm'

export const rankStyle = 'font-bold tracking-[-0.1em]'

export function Card({ rank, suit, className }: CardProps) {
    const isSuited = typeof suit === 'number'
    const [state] = useAppState()
    const { ranks, icons, colors, } = LIBRARY[state.deck]
    const SuitIcon = isSuited ? icons[suit] : null

    return (
        <li className={concat(cardStyle, isSuited ? colors[suit] : 'text-stone-500', className)}>
            <div className="flex flex-col gap-0.5">
                <span className={rankStyle}>{ranks[rank]}</span>
                {SuitIcon && (<SuitIcon size="0.8em" weight="fill" />)}
            </div>
        </li>
    )
}
