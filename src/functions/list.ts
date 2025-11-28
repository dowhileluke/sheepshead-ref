export function list(n: number): number[];
export function list<T>(n: number, mapFn: (n: number) => T): T[];
export function list<T>(n: number, mapFn?: (n: number) => T) {
	if (mapFn) return Array.from({ length: n }, (_, i) => mapFn(i))

	return Array.from({ length: n }, (_, i) => i)
}
