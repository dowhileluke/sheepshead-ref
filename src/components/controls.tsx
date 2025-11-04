import { MODE_LIST } from '../const'
import { useAppState } from '../hooks/use-app-state'

export function Controls() {
    const [, actions] = useAppState()

    return (
        <nav className="flex-center gap-2 p-2">
            {MODE_LIST.map(mode => (
                <button key={mode} type="button" onClick={() => actions.setMode(mode)}>
                    {mode}
                </button>
            ))}
        </nav>
    )
}
