import { StarIcon } from '@phosphor-icons/react'
import { EyesTable } from './eyes-table'
import { Section } from './section'

export function Counters() {
    return (
        <Section name="Card Values" isPlain>
            <EyesTable />
            <div className="flex-center text-xs text-stone-400">
                <span>Goal: Capture more than <strong>60</strong></span>
                <StarIcon size="1em" weight="fill" />
            </div>
        </Section>
    )
}
