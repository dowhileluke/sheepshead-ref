import { NoteBlankIcon } from '@phosphor-icons/react'
import { DeckSelect } from './deck-select'
import { Label } from './label'
import { ModeDropdown } from './mode-dropdown'
import { useAppState } from '../hooks/use-app-state'

export function Controls() {
    const [, { cycleView }] = useAppState()

    return (
        <nav className="flex-center gap-4 p-2 pb-inset-4 capitalize">
            <Label name="Mode">
                <ModeDropdown />
            </Label>
            <Label name="Deck">
                <DeckSelect />
            </Label>
            <button type="button" className="cursor-pointer text-stone-400" onClick={cycleView}>
                <NoteBlankIcon />
            </button>
        </nav>
    )
}
