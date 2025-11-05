import { MINOR_RANKING, MINOR_EYES } from '../const'
import { Card } from './card'
import { List } from './list'
import { Section } from './section'

export function Minor() {
    return (
        <Section name="Minor Trump" eyes={25}>
            <List>
                {MINOR_RANKING.map((rank, i) => (
                    <Card key={rank} rank={rank} suit={2} eyes={MINOR_EYES[i]} />
                ))}
            </List>
        </Section>
    )
}
