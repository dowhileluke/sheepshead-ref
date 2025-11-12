// import { useAppState } from '../hooks/use-app-state'
import { DeckSelect } from './deck-select'
import { TrumpSelect } from './trump-select'

// const buttonStyle = 'capitalize text-stone-300 cursor-pointer'

export function Controls() {
    // const [state, actions] = useAppState()

    return (
        <nav className="flex-center gap-4 p-2 pb-5 capitalize">
            <DeckSelect />
            {/* <TrumpSelect /> */}
        </nav>
    )
}
