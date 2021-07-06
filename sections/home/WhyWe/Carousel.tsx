import Direction from './Direction'
import classnames from 'classnames'
import Icon from '../../../components/Icon'
import { useEffect, useRef } from 'react'

interface PropsItem {
    src: string
    active?: boolean
}

function Item({ src, active = false }: PropsItem) {
    return (
        <div
            className={classnames(
                'bg-linear-primary carousel-item p-10 opacity-50',
                {
                    'opacity-100': active
                }
            )}
        >
            <img src={src} className="w-40" />
        </div>
    )
}

interface PropsCarousel {
    index: number
    onClickLeft: () => void
    onClickRight: () => void
    onScroll?: (ev: any) => void
}

export default function Carousel({
    index,
    onClickLeft,
    onClickRight,
    onScroll = () => null
}: PropsCarousel) {
    const divRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const div = divRef.current
        if (div) {
            const width =
                Array.from(div.children)
                    .map(child => child.clientHeight)
                    .reduce((a, b) => a + b, 0) / 5
            divRef.current?.scrollTo(width * index, 0)
        }
    }, [index])

    return (
        <>
            <div
                ref={divRef}
                className="carousel mt-4 mb-4 xl:hidden"
                style={{ scrollBehavior: 'smooth' }}
                onScroll={onScroll}
            >
                <Item src="img/section_why_we_1.svg" active={index === 0} />
                <Item src="img/section_why_we_2.svg" active={index === 1} />
                <Item src="img/section_why_we_3.svg" active={index === 2} />
                <Item src="img/section_why_we_4.svg" active={index === 3} />
                <Item src="img/section_why_we_5.svg" active={index === 4} />
                <Item src="img/section_why_we_6.svg" active={index === 5} />
            </div>
            <div className="flex justify-center xl:hidden">
                <Direction onClick={onClickLeft} className="mr-5">
                    <Icon name="left" color="#7F52DD" size={18} />
                </Direction>
                <Direction onClick={onClickRight} className="ml-5">
                    <Icon name="right" color="#7F52DD" size={18} />
                </Direction>
            </div>
        </>
    )
}
