import { FOUR, LIBRARY } from '../const'
import { concat } from '../functions/concat';
import { useAppState } from '../hooks/use-app-state';
import { Label } from './label';

type IconMode = 'sm' | 'lg'

type SuitSelectProps<T> = {
	name: string;
	value: T;
	onChange: (value: T) => void;
}

export function SuitSelect<T extends number | string>({ name, value, onChange }: SuitSelectProps<T>) {
	function handleClick(n: number) {
		onChange((value === n ? -1: n) as T)
	}

	return (
		<section className="relative h-full max-w-[80vh] aspect-square border border-stone-300 rounded-sm">
			{FOUR.map(n => (
				<SuitIcon
					key={n}
					n={n}
					onClick={() => handleClick(n)}
					mode={n === value ? 'lg' : 'sm'}
				/>
			))}
		</section>
	)
}

type SuitIconProps = {
	n: number;
	onClick: () => void;
	mode: IconMode;
}

const lefts = ['left-3/10', 'left-4/10', 'left-5/10', 'left-6/10', ]

function SuitIcon({ n, onClick, mode }: SuitIconProps) {
	const [{ deck }] = useAppState()
	const { icons, colors } = LIBRARY[deck]
	const Icon = icons[n]

	return (
		<button
			type="button"
			onClick={onClick}
			className={concat(
				'absolute cursor-pointer transition-all',
				colors[n],
				mode === 'lg'
					? 'size-[80%] top-[10%] left-[10%]'
					: `size-[10%] top-[2%] ${lefts[n]}`,
			)}
		>
			<Icon weight="fill" size="100%" />
		</button>
	)
}
