import type { FRENCH_COLORS, FRENCH_RANKS, FRENCH_SUITS } from './const'

export type Mode = 'french' | 'poker' | 'german'

export type AppState = {
    mode: Mode;
    suits: typeof FRENCH_SUITS;
    ranks: typeof FRENCH_RANKS;
    colors: typeof FRENCH_COLORS;
}

export type AppActions = {
    setMode: (mode: Mode) => void;
}
