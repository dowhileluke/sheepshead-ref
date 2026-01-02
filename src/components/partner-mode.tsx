import { useAppState } from '../hooks/use-app-state'
import { SuitSelect } from './suit-select'

export function PartnerMode() {
	const [state, actions] = useAppState()

	function handleTrump(t: typeof state['trump']) {
		actions.setTrump(t === -1 ? 'z' : t)
	}

	return (
		<main className="h-full p-4 gap-4 flex-center portrait:flex-col">
			<SuitSelect label="Trump" value={state.trump} onChange={handleTrump} />
			<SuitSelect label="Called Ace" value={state.partner} onChange={actions.setPartner} />
		</main>
	)
}
