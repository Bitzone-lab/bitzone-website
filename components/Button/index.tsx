import * as React from 'react'

export interface PropsButton {
    children: any
    onClick?: () => void
    className?: string
    type?: 'button' | 'submit' | 'reset'
}

export default function Button({
    children,
    onClick = () => null,
    className = '',
    type = 'button'
}: PropsButton) {
    return (
        <button
            onClick={onClick}
            className={`btn btn-accent font-sofia-bold rounded-none normal-case text-lg text-subtle ${className}`}
            type={type}
        >
            {children}
        </button>
    )
}
