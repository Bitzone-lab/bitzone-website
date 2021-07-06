import { ReactNode, useRef, useEffect } from 'react'
import classnames from 'classnames'

export interface PropsCarouselContent {
    children: ReactNode
    className?: string
    index?: number
}

export default function CarouselContent({
    children,
    className = '',
    index = 0
}) {
    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const width = Math.max(
            document.documentElement.clientWidth || 0,
            window.innerWidth || 0
        )
        const div = divRef.current
        div?.scrollTo(width * index, 0)
    }, [index])

    return (
        <div
            ref={divRef}
            className={classnames(className, 'w-full carousel xl:h-auto')}
            style={{ scrollBehavior: 'smooth' }}
        >
            {children}
        </div>
    )
}
