import { list } from '../functions/list'
import { useAppState } from '../hooks/use-app-state'
import { Card } from './card'
import { List } from './list'
import { MultiCard } from './multi-card'
import { Section } from './section'

const suitIndexes = list(4)

export function Trump() {
    const [{ trump }] = useAppState()
    const isWenz = trump === 'z'
    const bowers = isWenz ? [4] : [3, 4]

    return (
        <Section name="Trump">
            <div className="flex-center portrait:flex-col gap-4">
                {bowers.map(n => (
                    <List key={n}>
                        {suitIndexes.map(i => (
                            <Card rank={n} suit={i} />
                        ))}
                    </List>
                ))}
                {!isWenz && (
                    <List>
                        <MultiCard suit={trump} />
                    </List>
                )}
            </div>
        </Section>
    )
}
