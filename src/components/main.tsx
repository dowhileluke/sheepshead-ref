import { Trump } from './trump'
import { Normal } from './normal'
import { Counters } from './counters'

export function Main() {
    return (
        <main className="flex flex-col justify-center gap-4">
                <Trump />
                <div className="flex portrait:flex-col justify-between gap-4">
                    <Normal />
                    <Counters />
                </div>
        </main>
    )
}
