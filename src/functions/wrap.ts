import { createElement, type ComponentPropsWithRef, type ElementType, type JSX } from 'react'
import { concat } from './concat'

type ClassNameFn<T extends ElementType> = (props: ComponentPropsWithRef<T>) => string
type ClassName<T extends ElementType> = string | ClassNameFn<T>

function getClassNameFn<T extends ElementType>(className: ClassName<T>) {
    if (className instanceof Function) return className

    return function defaultFn(props: ComponentPropsWithRef<T>) {
        return concat(className, props.className)
    }
}

export function wrap<T extends ElementType>(type: T, className: ClassName<T>) {
    const classNameFn = getClassNameFn(className)

    return function Wrapped(props: ComponentPropsWithRef<T>): JSX.Element {
        return createElement(type, {
            ...props,
            className: classNameFn(props),
        })
    }
}
