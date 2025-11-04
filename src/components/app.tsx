import { Controls } from './controls'
import { Major } from './major'
import { Minor } from './minor'
import { Normal } from './normal'

export function App() {
    return (
        <>
            <main className="flex-center flex-wrap gap-2">
                <section className="flex-center flex-col gap-2">
                    <Major />
                    <Minor />
                </section>

                <section className="flex-center">
                    <Normal />
                </section>
            </main>
            <Controls />
        </>
    )
}
