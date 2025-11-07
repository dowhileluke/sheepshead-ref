import { useState, type Dispatch, type PropsWithChildren, type SetStateAction } from 'react'
import type { AppActions, AppState } from '../types'
import { MODE_MAP } from '../const'
import { AppContext } from '../context'

const initialState: AppState = {
    ...MODE_MAP.french,
    count: 1,
}

function actionFactory(setState: Dispatch<SetStateAction<AppState>>) {
    const result: AppActions = {
        setMode(mode) {
            setState(prev => ({ ...prev, ...MODE_MAP[mode], }))
        },
        increment() {
            setState(prev => ({ ...prev, count: prev.count + 1, }))
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
