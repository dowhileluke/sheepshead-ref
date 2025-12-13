import { Main } from './main'
import { Controls } from './controls'
import { PartnerMode } from './partner-mode'
import { useAppState } from '../hooks/use-app-state'

export function App() {
    const [{ view }] = useAppState()

    return (
        <>
            {view === 'trump' ? (<Main />) : (<PartnerMode />)}
            <Controls />
        </>
    )
}
