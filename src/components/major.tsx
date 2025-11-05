import { Card } from './card'
import { Eyes } from './eyes'
import { List } from './list'
import { Section } from './section'

const suitIndexes = [0, 1, 2, 3]

export function Major() {
    return (
        <Section name="Major Trump" eyes={20}>
            {[2, 3].map(n => (
                <div key={n} className="flex-center gap-4">
                    <List>
                        {suitIndexes.map(i => (
                            <Card key={i} rank={n} suit={i} />
                        ))}
                    </List>
                    <Eyes count={5-n} suffix="each" />
                </div>
            ))}
        </Section>
    )
}
