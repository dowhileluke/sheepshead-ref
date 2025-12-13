import { useAppState } from '../hooks/use-app-state'
import { SuitSelect } from './suit-select'

export function PartnerMode() {
	const [state, actions] = useAppState()

	return (
		<main className="h-full p-4 gap-4 flex-center portrait:flex-col">
			<SuitSelect name="Trump" value={state.trump} onChange={(v) => actions.setTrump(v === -1 ? 'z' : v)} />
			<SuitSelect name="Partner" value={state.partner} onChange={actions.setPartner} />
		</main>
	)
}
