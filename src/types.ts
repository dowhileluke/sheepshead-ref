import type { Icon } from '@phosphor-icons/react'

export type Deck = 'french' | 'poker' | 'german'
export type DeckConfig = {
    ranks: string[];
    suits: string[];
    icons: Icon[];
    colors: string[];
}

export type AppState = {
    deck: Deck;
    trump: number | 'z';
    copies: number[];
}

export type AppActions = {
    setDeck: (deck: Deck) => void;
    setTrump: (trump: number | 'z') => void;
    increment: (index: number) => void;
    decrement: (index: number) => void;
    reset: () => void;
}
