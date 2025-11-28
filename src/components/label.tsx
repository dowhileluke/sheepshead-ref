import type { PropsWithChildren } from 'react'

type LabelProps = {
	name: string;
}

const floatStyle = 'absolute top-[-1px] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none'
const nameStyle = floatStyle + ' p-0.5 bg-stone-100 text-stone-400 font-bold text-xs leading-none'

export function Label({ name, children }: PropsWithChildren<LabelProps>) {
	return (
		<label className='relative'>
			{children}
			<div className={nameStyle}>
				{name}
			</div>
		</label>
	)
}
