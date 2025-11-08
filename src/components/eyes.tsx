import { EqualsIcon, StarIcon } from '@phosphor-icons/react'

type EyesProps = {
    count?: number;
    prefix?: string;
    suffix?: string;
    equals?: boolean;
}

export function Eyes({ count, prefix, suffix, equals = false }: EyesProps) {
    if (typeof count !== 'number') return null

    return (
        <span className="text-xs font-normal text-stone-400 flex-center gap-0.5">
            {prefix}
            {' '}
            {equals && (<EqualsIcon />)}
            <span className="flex-center font-bold">
                {count}
                <StarIcon size="1em" weight="fill" />
            </span>
            {' '}
            <span>{suffix}</span>
        </span>
    )
}
