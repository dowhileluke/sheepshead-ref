import { MODE_LIST } from '../const'
import { concat } from '../functions/concat'
import { useAppState } from '../hooks/use-app-state'

export function Controls() {
    const [state, actions] = useAppState()

    return (
        <nav className="flex-center gap-4 p-2 pb-5 capitalize">
            {MODE_LIST.map(mode => (
                <button
                    key={mode}
                    type="button"
                    onClick={() => actions.setMode(mode)}
                    className={concat(
                        'capitalize',
                        mode === state.mode ? 'text-stone-600' : 'text-stone-300',
                    )}
                >
                    {mode}
                </button>
            ))}
        </nav>
    )
}
