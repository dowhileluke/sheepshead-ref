import { Categories } from './categories'
import { Controls } from './controls'

export function App() {
    return (
        <>
            <main className="flex gap-12">
                <Categories />
                <Categories />
                <Categories />
                <Categories />
            </main>
            <Controls />
        </>
    )
}
