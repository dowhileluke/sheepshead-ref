import { COMMON_RANKING, EYE_VALUES, LIBRARY, WENZ_RANKING } from '../const'
import { useAppState } from '../hooks/use-app-state'
import { StarIcon } from '@phosphor-icons/react'
import { wrap } from '../functions/wrap'

const Col = wrap('div', 'flex flex-col border-t border-r border-b border-stone-300');
const Cell = wrap('div', 'flex-center first:border-b last:font-bold border-stone-300 p-1 min-w-6 h-6 text-center')

export function EyesTable() {
    const [state] = useAppState()
    const { ranks } = LIBRARY[state.deck]

    return (
        <div className="flex text-sm leading-none text-stone-500">
            <Col className="border-l rounded-l-md">
                <Cell />
                <Cell>
                    <StarIcon weight="fill" />
                </Cell>
            </Col>
            {(state.trump === 'z' ? WENZ_RANKING : COMMON_RANKING).slice(0, 5).map(i => (
                <Col key={i}>
                    <Cell>{ranks[i]}</Cell>
                    <Cell>{EYE_VALUES[i]}</Cell>
                </Col>
            ))}
            <Col className="rounded-r-md">
                <Cell className="px-2">9 &middot; 8 &middot; 7</Cell>
                <Cell>0</Cell>
            </Col>
        </div>
    )
}
