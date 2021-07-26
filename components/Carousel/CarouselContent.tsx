import { ReactNode, useRef, useEffect } from 'react'
import classnames from 'classnames'
import Icon from '../Icon'
import { viewportHeight, viewportWidth } from '../../utilities/viewport'

export interface PropsCarouselContent {
    children: ReactNode
    className?: string
    index?: number
    title?: string
}

export default function CarouselContent({
    children,
    className = '',
    index = 0,
    title = ''
}: PropsCarouselContent) {
    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const width = viewportWidth()
        const div = divRef.current
        div?.scrollTo(width * index, 0)
    }, [index])

    function handleArrow() {
        const height = viewportHeight()
        document.documentElement.scrollTo(0, height - 64)
    }

    return (
        <div
            ref={divRef}
            className={classnames(className, 'w-full carousel xl:h-auto')}
            style={{ scrollBehavior: 'smooth' }}
        >
            {children}
            <div className="absolute w-full px-5 text-white top-0">
                <div className="max-w-5xl w-full mx-auto mt-8 xl:mt-14 xl:flex justify-between">
                    <h3 className="font-sofia font-light text-3xl px-4">
                        {title}
                    </h3>
                    <Icon
                        name="arrow-down"
                        size={18}
                        onClick={handleArrow}
                        className="mt-2 cursor-pointer hidden xl:inline"
                    />
                </div>
            </div>
        </div>
    )
}
