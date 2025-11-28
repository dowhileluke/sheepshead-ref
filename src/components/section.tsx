import type { ComponentPropsWithRef, ReactNode } from 'react'

type SectionProps = ComponentPropsWithRef<'section'> & {
    name: string;
    note?: ReactNode;
    isPlain?: boolean;
}

export function Section({ name, note, isPlain = false, children, ...props }: SectionProps) {
    return (
        <section {...props} className="flex items-center flex-col gap-2">
            <h3 className="flex items-baseline gap-2">
                <span className="font-bold">{name}</span>
                {typeof note === 'string' ? (<span>{note}</span>) : note}
            </h3>
            {isPlain ? children : (
                <div className="p-2 border-t border-stone-300 rounded-lg">
                    {children}
                </div>
            )}
        </section>
    )
}
