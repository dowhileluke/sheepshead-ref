import type { ComponentPropsWithRef } from 'react'
// import { Eyes } from './eyes'

type SectionProps = ComponentPropsWithRef<'section'> & {
    name: string;
    eyes: number;
}

export function Section({ name, eyes, className, children, ...props }: SectionProps) {
    return (
        <section {...props} className="relative flex-center flex-col gap-2 p-2 mt-4.5 border-t border-stone-300 rounded-lg">
            <h3 className="absolute -top-4.5 font-bold flex-center gap-4">
                {name}
                {/* <Eyes count={eyes} suffix="total" /> */}
            </h3>
            {children}
        </section>
    )
}
