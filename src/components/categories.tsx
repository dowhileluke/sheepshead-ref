import { concat } from '../functions/concat'
import { useAppState } from '../hooks/use-app-state'
import { Trump } from './trump'
import { Normal } from './normal'

export function Categories() {
    const [state] = useAppState()

    return (
        <main className={concat("flex-center gap-x-4 gap-y-2", state.count > 1 ? 'flex-col' : 'flex-wrap')}>
            <section className={concat("flex-center gap-2 flex-col")}>
                <Trump />
            </section>

            <section className="flex-center">
                <Normal />
            </section>
        </main>
    )
}
