import { MINOR_RANKING } from '../const'
import { list } from '../functions/list'
import { Card } from './card'
import { List } from './list'
import { Section } from './section'

const suitIndexes = list(4)

export function Trump() {
    return (
        <Section name="Trump">
            <List>
                {[2, 3].map(n => (
                    suitIndexes.map(i => (
                        <Card key={i} rank={n} suit={i} />
                    ))
                ))}
                {MINOR_RANKING.map((rank) => (
                    <Card key={rank} rank={rank} suit={2} />
                ))}
            </List>
        </Section>
    )
}
