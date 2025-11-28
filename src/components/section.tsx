import type { ComponentPropsWithRef, ReactNode } from 'react'
// import { Eyes } from './eyes'

type SectionProps = ComponentPropsWithRef<'section'> & {
    name: string;
    note?: ReactNode;
}

export function Section({ name, note, children, ...props }: SectionProps) {
    return (
        <section {...props} className="flex items-center flex-col gap-2">
            <h3 className="flex items-baseline gap-2">
                <span className="font-bold">{name}</span>
                {note && (<span>{note}</span>)}
            </h3>
            <div className="flex flex-col items-center gap-2 p-2 border-t border-stone-300 rounded-lg">
                {children}
            </div>
        </section>
    )
}
