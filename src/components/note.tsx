import { Eyes } from './eyes'

export function Note() {
    return (
        <div className="w-full h-7 flex justify-around items-center">
            <Eyes prefix="A" equals count={11} />
            <Eyes prefix="10" equals count={10} />
            <Eyes prefix="K" equals count={4} />
            <span className="text-xs line-through text-stone-400">
                9 8 7
            </span>
        </div>
    )
}
