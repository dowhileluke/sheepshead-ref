import { FOUR, LIBRARY } from '../const'
import { useAppState } from '../hooks/use-app-state'
import { Select } from './select'

function toTrump(s: string) {
    if (s === 'z') return 'z'

    return Number(s)
}

export function ModeDropdown() {
    const [state, actions] = useAppState()
    const { suits } = LIBRARY[state.deck]

    return (
        <Select value={state.trump} onChange={(e) => actions.setTrump(toTrump(e.target.value))}>
            {FOUR.map(n => (
                <option key={n} value={n}>{suits[n]}</option>
            ))}
            <option value="z">Wenz</option>
        </Select>
    )
}
