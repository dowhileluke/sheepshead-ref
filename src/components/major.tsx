import { Card } from './card'
import { List } from './list'

const suitIndexes = [0, 1, 2, 3]

export function Major() {
    return (
        <section className="flex-center flex-col gap-2">
            {[2, 3].map(n => (
                <List key={n}>
                    {suitIndexes.map(i => (
                        <Card key={i} rank={n} suit={i} />
                    ))}
                </List>
            ))}
        </section>
    )
}
