import { DeckSelect } from './deck-select'
import { Label } from './label'
import { TrumpSelect } from './trump-select'

export function Controls() {
    return (
        <nav className="flex-center gap-4 p-2 pb-inset-4 capitalize">
            <Label name="Game">
                <TrumpSelect />
            </Label>
            <Label name="Deck">
                <DeckSelect />
            </Label>
        </nav>
    )
}
