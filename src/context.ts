import { createContext } from 'react'
import type { AppActions, AppState } from './types'

export const AppContext = createContext<[AppState, AppActions] | null>(null)
