export function concat(...args: Array<string | undefined>) {
    return args.filter(Boolean).join(' ')
}
