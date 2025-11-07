import { PlusIcon } from '@phosphor-icons/react'
import { MODE_LIST } from '../const'
import { concat } from '../functions/concat'
import { useAppState } from '../hooks/use-app-state'

const buttonStyle = 'capitalize text-stone-300 cursor-pointer'

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
                        buttonStyle,
                        mode === state.mode ? 'text-stone-600' : 'hover:text-stone-400',
                    )}
                >
                    {mode}
                </button>
            ))}
            <button
                type="button"
                className={concat(buttonStyle, 'hover:text-stone-400')}
                onClick={actions.increment}
            >
                <PlusIcon />
            </button>
        </nav>
    )
}
