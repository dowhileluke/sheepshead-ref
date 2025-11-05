import { EyeIcon } from '@phosphor-icons/react'
import type { ReactNode } from 'react';

type EyesProps = {
    count?: number;
    squeeze?: boolean;
    children?: ReactNode;
}

export function Eyes({ count, squeeze, children }: EyesProps) {
    if (!count) return null

    return (
        <span className="text-xs text-stone-400 flex-center gap-0.5">
            <span className={squeeze ? "tracking-[-0.1em]" : ''}>{count}</span>
            <EyeIcon size="1em" weight="fill" />
            {children}
        </span>
    )
}
