import { useState, type Dispatch, type PropsWithChildren, type SetStateAction } from 'react'
import type { AppActions, AppState } from '../types'
import { AppContext } from '../context'
import { list } from '../functions/list'

const emptyList = list(6, () => 0)

const initialState: AppState = {
    deck: 'french',
    trump: 2,
    partner: -1,
    view: 'trump',
}

function actionFactory(setState: Dispatch<SetStateAction<AppState>>) {
    const result: AppActions = {
        setDeck(deck) {
            setState(prev => ({ ...prev, deck, }))
        },
        setTrump(trump) {
            setState(prev => ({ ...prev, trump, }))
        },
        setPartner(partner) {
            setState(prev => ({ ...prev, partner, }))
        },
        cycleView() {
            setState(prev => ({ ...prev, view: prev.view === 'trump' ? 'partner' : 'trump', }))
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
