import { useContext } from 'react'
import { AppContext } from '../context'

export function useAppState() {
    const ctx = useContext(AppContext)

    if (!ctx) throw new Error('AppProvider not found')

    return ctx
}
