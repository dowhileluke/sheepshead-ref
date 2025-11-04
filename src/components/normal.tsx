import { MINOR_RANKING } from '../const'
import { Card } from './card'
import { List } from './list'

const suitIndexes = [0, 1, 3]

export function Normal() {
    return (
        <section className="flex-center flex-col gap-2">
            {suitIndexes.map(suit => (
                <List key={suit}>
                    {MINOR_RANKING.map(rank => (
                        <Card key={rank} rank={rank} suit={suit} />
                    ))}
                </List>
            ))}
        </section>
    )
}
