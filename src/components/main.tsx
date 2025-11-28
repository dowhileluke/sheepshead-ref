import { Trump } from './trump'
import { Normal } from './normal'
import { Counters } from './counters'

export function Main() {
    return (
        <main className="flex portrait:flex-col justify-center gap-4">
                <Trump />
                <div className="flex flex-col gap-4">
                    <Normal />
                    <Counters />
                </div>
        </main>
    )
}
