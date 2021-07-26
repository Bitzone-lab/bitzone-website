import { ReactNode, useRef, useEffect } from 'react'
import classnames from 'classnames'
import { viewportWidth } from '../../utilities/viewport'

export interface PropsCarouselHalfContent {
    children: ReactNode
    className?: string
    index?: number
}

export default function CarouselContentHalf({
    children,
    className = '',
    index = 0
}: PropsCarouselHalfContent) {
    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const width = viewportWidth() / 2
        const div = divRef.current
        div?.scrollTo(width * index, 0)
    }, [index])

    return (
        <div
            ref={divRef}
            className={classnames(className, 'w-full carousel xl:h-auto', {
                'text-black': index === 1
            })}
            style={{ scrollBehavior: 'smooth' }}
        >
            {children}
        </div>
    )
}
