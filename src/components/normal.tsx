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
        <span className="flex">
            {FOUR.map(i => i === state.trump ? null : createElement(
                icons[i],
                {
                    className: colors[i],
                    weight: 'fill',
                    size: '0.8em',
                },
            ))}
        </span>
    )

    return (
        <Section name="Non-Trump" note={note}>
            <List>
                <MultiCard />
            </List>
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
