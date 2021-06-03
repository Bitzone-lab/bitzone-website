import * as React from 'react'

export interface PropsCondition {
    children: any
    isEqual: string | number | boolean
    to:
        | string
        | number
        | boolean
        | string[]
        | number[]
        | boolean[]
        | (boolean | string | number)[]
}

export default function Condition({ children, isEqual, to }: PropsCondition) {
    return <>{isEqual === to ? children : null}</>
}
