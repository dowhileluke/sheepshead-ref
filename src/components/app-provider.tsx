import { useState, type Dispatch, type PropsWithChildren, type SetStateAction } from 'react'
import type { AppActions, AppState } from '../types'
import { AppContext } from '../context'

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
            setState(prev => ({
                ...prev,
                trump,
                partner: prev.partner === trump ? -1 : prev.partner,
            }))
        },
        setPartner(partner) {
            setState(prev => ({
                ...prev,
                trump: prev.trump === partner ? 'z' : prev.trump,
                partner,
            }))
        },
        cycleView() {
            setState(prev => ({
                ...prev,
                view: prev.view === 'trump' ? 'partner' : 'trump',
            }))
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
