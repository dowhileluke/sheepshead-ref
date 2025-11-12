import { useAppState } from '../hooks/use-app-state'
import { Categories } from './categories'
import { Controls } from './controls'

export function App() {
    const [state] = useAppState()

    return (
        <>
            <main className="flex gap-12">
                <Categories />
            </main>
            <Controls />
        </>
    )
}
