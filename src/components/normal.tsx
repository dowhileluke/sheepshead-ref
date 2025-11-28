import { FOUR } from '../const'
import { useAppState } from '../hooks/use-app-state'
import { List } from './list'
import { MultiCard } from './multi-card'
import { Section } from './section'

export function Normal() {
    return (
        <Section name="Non-Trump">
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
