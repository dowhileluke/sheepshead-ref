import { NotePencilIcon } from '@phosphor-icons/react'
import { DeckSelect } from './deck-select'
import { Label } from './label'
import { TrumpSelect } from './trump-select'
import { useAppState } from '../hooks/use-app-state'

export function Controls() {
    const [, { cycleView }] = useAppState()

    return (
        <nav className="flex-center gap-4 p-2 pb-inset-4 capitalize">
            <Label name="Mode">
                <TrumpSelect />
            </Label>
            <Label name="Deck">
                <DeckSelect />
            </Label>
            <button type="button" className="cursor-pointer text-stone-400" onClick={cycleView}>
                <NotePencilIcon />
            </button>
        </nav>
    )
}
