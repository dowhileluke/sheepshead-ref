import { COMMON_RANKING, EYE_VALUES, LIBRARY, WENZ_RANKING } from '../const'
import { useAppState } from '../hooks/use-app-state'
import { StarIcon } from '@phosphor-icons/react'
import { wrap } from '../functions/wrap'

const Col = wrap('div', 'flex flex-col border-t border-r border-b border-stone-300');
const Cell = wrap('div', 'flex-center first:border-b border-stone-300 p-1 min-w-6 h-6 text-center')

const eyeStyle = 'font-bold last:rounded-sm'

export function EyesTable() {
    const [state] = useAppState()
    const { ranks } = LIBRARY[state.deck]

    return (
        <div className="flex text-xs leading-none text-stone-500">
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
                <Cell>9 8 7</Cell>
                <Cell>0</Cell>
            </Col>
        </div>
    )
}

export function EyesTable1() {
    const [state] = useAppState()
    const { ranks } = LIBRARY[state.deck]

    return (
        <table className="text-xs text-stone-500">
            <tbody>
                <tr>
                    <Cell className="rounded-md" />
                    {COMMON_RANKING.slice(0, 5).map(i => (
                        <Cell key={i}>
                            {ranks[i]}
                        </Cell>
                    ))}
                    <Cell className="rounded-md">9 8 7</Cell>
                </tr>
                <tr>
                    <Cell className="rounded-md">
                        <div className="flex-center">
                            <StarIcon weight="fill" />
                        </div>
                    </Cell>
                    {COMMON_RANKING.slice(0, 5).map(i => (
                        <Cell key={i} className={eyeStyle}>
                            {EYE_VALUES[i]}
                        </Cell>
                    ))}
                    <Cell className={eyeStyle}>0</Cell>
                </tr>
            </tbody>
        </table>
    )
}
