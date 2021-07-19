import { ReactNode, useRef, useEffect } from 'react'
import classnames from 'classnames'
import { viewportWidth } from '../../utilities/viewport'

export interface PropsCarouselContent {
    children: ReactNode
    className?: string
    index?: number
    title?: string
}

export default function CarouselContent({
    children,
    className = '',
    index = 0
}: PropsCarouselContent) {
    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const width = viewportWidth()
        const div = divRef.current
        div?.scrollTo(width * index, 0)
    }, [index])

    return (
        <div className="xl:px-10 overflow-hidden">
            <div
                ref={divRef}
                className={classnames(className, 'carousel xl:h-auto')}
                style={{ scrollBehavior: 'smooth' }}
            >
                {children}
            </div>
        </div>
    )
}
