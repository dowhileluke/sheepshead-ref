import { MINOR_RANKING } from '../const'
import { Card } from './card'
import { Eyes } from './eyes'
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
            <div className="w-full h-7 flex justify-around items-center">
                <Eyes prefix="A" equals count={11} />
                <Eyes prefix="10" equals count={10} />
                <Eyes prefix="K" equals count={4} />
                <span className="text-xs line-through text-stone-400">
                    9 8 7
                </span>
            </div>
        </Section>
    )
}
