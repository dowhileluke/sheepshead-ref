import { Trump } from './trump'
import { Normal } from './normal'

export function Main() {
    return (
        <main className="flex portrait:flex-col justify-center gap-4">
                <Trump />
                <Normal />
        </main>
    )
}
