import * as React from 'react'

export interface PropsButton {
    children: any
    onClick: any
    className: string
}

export default function Button({ children, onClick, className }: PropsButton) {
    return (
        <button
            onClick={onClick}
            className={`btn btn-accent font-sofia rounded-none normal-case text-lg text-subtle font-black ${className}`}
        >
            {children}
        </button>
    )
}

Button.defaultProps = {
    className: '',
    onClick: () => null
}
