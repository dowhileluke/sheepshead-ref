import { createElement, type ComponentPropsWithRef, type ElementType, type JSX } from 'react'
import { concat } from './concat'

export function wrap<T extends ElementType>(type: T, className: string) {
    return function Wrapped(props: ComponentPropsWithRef<T>): JSX.Element {
        return createElement(type, {
            ...props,
            className: concat(className, props.className),
        })
    }
}
