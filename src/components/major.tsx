import { Card } from './card'
import { List } from './list'
import { Section } from './section'

const suitIndexes = [0, 1, 2, 3]

export function Major() {
    return (
        <Section name="Major Trump" eyes={20}>
            {[2, 3].map(n => (
                <List key={n}>
                    {suitIndexes.map(i => (
                        <Card key={i} rank={n} suit={i} eyes={3} />
                    ))}
                </List>
            ))}
        </Section>
    )
}
