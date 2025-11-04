import { MINOR_RANKING } from '../const'
import { Card } from './card'
import { List } from './list'

export function Minor() {
    return (
        <section>
            <List>
                {MINOR_RANKING.map(i => (
                    <Card key={i} rank={i} suit={2} />
                ))}
            </List>
        </section>
    )
}
