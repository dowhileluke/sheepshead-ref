import { AcornIcon, BellIcon, ClubIcon, DiamondIcon, HeartStraightIcon, LeafIcon, SpadeIcon } from '@phosphor-icons/react'
import type { DeckConfig, Deck } from './types'
import { list } from './functions/list'

export const FOUR = list(4)
export const SIX = list(6)
export const EIGHT = list(8)

export const EYE_VALUES = [11, 10, 4, 3, 2, 0, 0, 0]
export const COMMON_RANKING = [3, 4, 0, 1, 2, 5, 6, 7]
export const WENZ_RANKING = [4, 0, 1, 2, 3, 5, 6, 7]

const french: DeckConfig = {
    ranks: ['A', '10', 'K', 'Q', 'J', '9', '8', '7'],
    suits: ['Clubs', 'Spades', 'Hearts', 'Diamonds'],
    icons: [ClubIcon, SpadeIcon, HeartStraightIcon, DiamondIcon],
    colors: ['text-(--black)', 'text-(--black)', 'text-(--red)', 'text-(--red)'],
}

const german: DeckConfig = {
    ranks: ['A', '10', 'K', 'O', 'U', '9', '8', '7'],
    suits: ['Acorns', 'Leaves', 'Hearts', 'Bells'],
    icons: [AcornIcon, LeafIcon, HeartStraightIcon, BellIcon],
    colors:  ['text-(--black)', 'text-(--green)', 'text-(--red)', 'text-(--yellow)'],
}

const hybrid: DeckConfig = {
    ...french,
    colors: german.colors,
}

const poker: DeckConfig = {
    ...french,
    colors: ['text-(--green)', 'text-(--black)', 'text-(--red)', 'text-(--blue)'],
}

export const DECK_LIST: Deck[] = ['french', 'german', 'hybrid', 'poker']
export const LIBRARY: Record<Deck, DeckConfig> = {
    french,
    german,
    hybrid,
    poker,
}
