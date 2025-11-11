import { MINOR_RANKING } from '../const'
import { Card } from './card'
import { List } from './list'
import { Section } from './section'

const suitIndexes = [0, 1, 2, 3]

export function Major() {
    return (
        <Section name="Trump">
            <List>
                {[2, 3].map(n => (
                    suitIndexes.map(i => (
                        <Card key={i} rank={n} suit={i} />
                    ))
                ))}
            </List>
            
            <List>
                {MINOR_RANKING.map((rank) => (
                    <Card key={rank} rank={rank} suit={2} />
                ))}
            </List>
        </Section>
    )
}
