import { useState, type Dispatch, type PropsWithChildren, type SetStateAction } from 'react'
import type { AppActions, AppState } from '../types'
import { MODE_MAP } from '../const'
import { AppContext } from '../context'

function actionFactory(setState: Dispatch<SetStateAction<AppState>>) {
    const result: AppActions = {
        setMode(mode) {
            setState(MODE_MAP[mode])
        },
    }

    return result
}

export function AppProvider({ children }: PropsWithChildren) {
    const [state, setState] = useState(MODE_MAP.french)
    const [actions] = useState(() => actionFactory(setState))

    return (
        <AppContext value={[state, actions]}>
            {children}
        </AppContext>
    )
}
