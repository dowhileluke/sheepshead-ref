import { createElement } from 'react'
import { FOUR, LIBRARY } from '../const'
import { useAppState } from '../hooks/use-app-state'
import { List } from './list'
import { MultiCard } from './multi-card'
import { Section } from './section'
import { DotIcon } from '@phosphor-icons/react'

export function Normal() {
    const [state] = useAppState()
    const { icons, colors, } = LIBRARY[state.deck]
    const plainSuitIndexes = FOUR.filter(n => n !== state.trump)

    const note = (
        <div className="flex-center gap-0 py-0.5 px-1 rounded-full border border-stone-300 bg-stone-100">
            {plainSuitIndexes.map(i => {
                const SuitIcon = icons[i]

                return (
                    <>
                        <SuitIcon weight="fill" size="0.8em" className={colors[i]} />
                        <DotIcon weight="bold" size="0.8em" className="text-stone-500 last:hidden" />
                    </>
                )
            })}
        </div>
    )

    return (
        <Section name="Non-Trump">
            <List>
                <MultiCard />
            </List>
            <div className="absolute inset-0 top-2/5 flex-center">
                {note}
            </div>
        </Section>
    )
}

export function NormalAll() {
    const [{ trump }] = useAppState()

    return (
        <Section name="Non-Trump">
            {FOUR.map(suit => suit === trump ? null : (
                <List key={suit}>
                    <MultiCard suit={suit} />
                </List>
            ))}
        </Section>
    )
}
