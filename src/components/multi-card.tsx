import { COMMON_RANKING, WENZ_RANKING } from '../const';
import { useAppState } from '../hooks/use-app-state'
import { Card } from './card';

type MultiCardProps = {
    suit?: number | null;
}

export function MultiCard({ suit }: MultiCardProps) {
    const [{ trump }] = useAppState()
    const lowRanks = trump === 'z' ? WENZ_RANKING.slice(1) : COMMON_RANKING.slice(2)

    return (
        <>
            {lowRanks.map(rank => (
                <Card key={rank} rank={rank} suit={suit} />
            ))}
        </>
    )
}
