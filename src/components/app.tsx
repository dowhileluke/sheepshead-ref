import { useAppState } from '../hooks/use-app-state'
import { Categories } from './categories'
import { Controls } from './controls'

export function App() {
    const [state] = useAppState()

    return (
        <>
            <main className="flex gap-12">
                {Array.from({ length: state.count }, (_, i) => (
                    <Categories key={i} />
                ))}
            </main>
            <Controls />
        </>
    )
}
