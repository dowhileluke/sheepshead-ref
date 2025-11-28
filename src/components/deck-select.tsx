import { DECK_LIST } from '../const'
import { capitalize } from '../functions/capitalize'
import { useAppState } from '../hooks/use-app-state'
import type { Deck } from '../types'
import { Select } from './select'

const opts = DECK_LIST.map(deck => (
	<option key={deck} value={deck}>{capitalize(deck)}</option>
))

export function DeckSelect() {
	const [state, actions] = useAppState()

	return (
		<Select value={state.deck} onChange={(e) => actions.setDeck(e.target.value as Deck)}>
			{opts}
		</Select>
	)
}
