import { useState, type Dispatch, type PropsWithChildren, type SetStateAction } from 'react'
import type { AppActions, AppState } from '../types'
import { AppContext } from '../context'
import { list } from '../functions/list'

const emptyList = list(6, () => 0)

const initialState: AppState = {
    deck: 'french',
    trump: 2,
    copies: emptyList,
}

function actionFactory(setState: Dispatch<SetStateAction<AppState>>) {
    const result: AppActions = {
        setDeck(deck) {
            setState(prev => ({ ...prev, deck, }))
        },
        setTrump(trump) {
            setState(prev => ({ ...prev, trump, }))
        },
        increment(index) {
            setState(prev => ({ ...prev, copies: prev.copies.map((n, i) => i === index ? n + 1 : n) }))
        },
        decrement(index) {
            setState(prev => ({ ...prev, copies: prev.copies.map((n, i) => i === index ? n - 1 : n) }))
        },
        reset() {
            setState(prev => ({ ...prev, copies: emptyList, }))
        },
    }

    return result
}

export function AppProvider({ children }: PropsWithChildren) {
    const [state, setState] = useState(initialState)
    const [actions] = useState(() => actionFactory(setState))

    return (
        <AppContext value={[state, actions]}>
            {children}
        </AppContext>
    )
}
