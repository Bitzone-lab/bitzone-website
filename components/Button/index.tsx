import * as React from 'react'

export interface PropsButton {
    children: any
    className: string
}

export default function Button({ children, className }: PropsButton) {
    return (
        <button
            className={`btn btn-accent font-sofia rounded-none normal-case text-lg text-subtle font-black ${className}`}
        >
            {children}
        </button>
    )
}

Button.defaultProps = {
    className: ''
}
