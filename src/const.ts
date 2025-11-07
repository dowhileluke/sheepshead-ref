import { AcornIcon, BellIcon, ClubIcon, DiamondIcon, HeartStraightIcon, LeafIcon, SpadeIcon } from '@phosphor-icons/react'
import type { Mode, ModeState } from './types'

export const FRENCH_SUITS = [ClubIcon, SpadeIcon, HeartStraightIcon, DiamondIcon]
export const GERMAN_SUITS = [AcornIcon, LeafIcon, HeartStraightIcon, BellIcon]

export const FRENCH_RANKS = ['A', 'K', 'Q', 'J', '10', '9', '8', '7']
export const GERMAN_RANKS = ['A', 'K', 'O', 'U', '10', '9', '8', '7']

export const MINOR_RANKING = [0, 4, 1, 5, 6, 7]
export const MINOR_EYES = [11, 10, 4, 0, 0, 0]

export const FRENCH_COLORS = ['text-(--black)', 'text-(--black)', 'text-(--red)', 'text-(--red)']
export const POKER_COLORS = ['text-(--green)', 'text-(--black)', 'text-(--red)', 'text-(--blue)']
export const GERMAN_COLORS = ['text-(--black)', 'text-(--green)', 'text-(--red)', 'text-(--yellow)']

const french: ModeState = {
    mode: 'french',
    suits: FRENCH_SUITS,
    ranks: FRENCH_RANKS,
    colors: FRENCH_COLORS,
}

const poker: ModeState = { ...french, mode: 'poker', colors: POKER_COLORS, }

const german: ModeState = {
    mode: 'german',
    suits: GERMAN_SUITS,
    ranks: GERMAN_RANKS,
    colors: GERMAN_COLORS,
}

export const MODE_MAP: Record<Mode, ModeState> = {
    french,
    poker,
    german,
}

export const MODE_LIST: Mode[] = ['french', 'german', 'poker']
