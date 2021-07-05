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
            className={`btn btn-accent font-sofia rounded-none normal-case text-lg text-subtle font-black ${className}`}
            type={type}
        >
            {children}
        </button>
    )
}
