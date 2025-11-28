import { StarIcon } from '@phosphor-icons/react'
import { EyesTable } from './eyes-table'
import { Section } from './section'

export function Counters() {
    return (
        <Section name="Values" isPlain>
            <EyesTable />
            <div className="flex-center text-xs text-stone-400">
                <span>Goal: Capture <strong>61</strong></span>
                <StarIcon size="1em" weight="fill" />
            </div>
        </Section>
    )
}
