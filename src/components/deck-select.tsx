import { DECK_LIST } from '../const'
import { useAppState } from '../hooks/use-app-state'
import type { Deck } from '../types'

export function DeckSelect() {
	const [state, actions] = useAppState()

	return (
		<select value={state.deck} onChange={(e) => actions.setDeck(e.target.value as Deck)}>
			{DECK_LIST.map(deck => (
				<option key={deck} value={deck}>{deck}</option>
			))}
		</select>
	)
}
