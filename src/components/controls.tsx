import { DeckSelect } from './deck-select'
// import { TrumpSelect } from './trump-select'

export function Controls() {
    return (
        <nav className="flex-center gap-4 p-2 pb-5 capitalize">
            <DeckSelect />
            {/* <TrumpSelect /> */}
        </nav>
    )
}
