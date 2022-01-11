import { ReactNode } from 'react'

export interface PropsCol {
    className?: string
    children: ReactNode
    cols?: SizeCol
    gap?: number
    gapY?: number
}

type SizeCol = '1' | '2' | '3' | '4' | '5' | '6'
