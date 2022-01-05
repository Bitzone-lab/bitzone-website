import { ReactNode } from 'react'

export interface PropsCol {
    className?: string
    children: ReactNode
    cols?: '2' | '3' | '4' | '5' | '6'
    gap?: number
}
