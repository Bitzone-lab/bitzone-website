interface PropsDirection {
    children: React.ReactNode
    className?: string
    onClick: (ev: any) => void
}

export default function Direction({
    children,
    className = '',
    onClick
}: PropsDirection) {
    return (
        <div
            className={`bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    )
}
