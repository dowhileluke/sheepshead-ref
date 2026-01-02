import { createElement } from 'react'
import { FOUR, LIBRARY } from '../const'
import { useAppState } from '../hooks/use-app-state'
import { List } from './list'
import { MultiCard } from './multi-card'
import { Section } from './section'

export function Normal() {
    const [state] = useAppState()
    const { icons, colors, } = LIBRARY[state.deck]

    const note = (
        <div className="flex-center gap-1 p-1 rounded-full border border-stone-200 backdrop-blur-md">
            {FOUR.map(i => i === state.trump ? null : createElement(
                icons[i],
                {
                    className: colors[i],
                    weight: 'fill',
                    size: '0.8em',
                },
            ))}
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
