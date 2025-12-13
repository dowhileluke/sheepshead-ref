import type { Icon } from '@phosphor-icons/react'

export type Deck = 'french' | 'poker' | 'german'
export type DeckConfig = {
    ranks: string[];
    suits: string[];
    icons: Icon[];
    colors: string[];
}

export type View = 'trump' | 'partner'
export type AppState = {
    deck: Deck;
    trump: number | 'z';
    partner: number;
    view: View;
}

export type AppActions = {
    setDeck: (deck: Deck) => void;
    setTrump: (trump: number | 'z') => void;
    setPartner: (partner: number) => void;
    cycleView: () => void;
    reset: () => void;
}
