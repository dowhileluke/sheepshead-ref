import { MINOR_RANKING } from '../const'
import { Card } from './card'
import { List } from './list'
import { Section } from './section'

const suitIndexes = [0, 1, 3]

export function Normal() {
    return (
        <Section name="Non-Trump" eyes={75}>
            {suitIndexes.map(suit => (
                <List key={suit}>
                    {MINOR_RANKING.map(rank => (
                        <Card key={rank} rank={rank} suit={suit} />
                    ))}
                </List>
            ))}
        </Section>
    )
}
