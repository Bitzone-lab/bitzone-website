import { useEffect, useState } from 'react'
import Carousel from '../../components/Carousel'
import Anchor from '../../components/Carousel/Anchor'
import CarouselContent from '../../components/Carousel/CarouselContent'
import CarouselItem from '../../components/Carousel/CarouselItem'
import content from '../../todo/carousel_content.json'

export default function Component() {
    const [index, setIndex] = useState(0)
    const [interval, pushInterval] = useState<NodeJS.Timeout | null>(null)
    function handleDir(dir: 'left' | 'right') {
        if (index >= 3 && dir === 'right') {
            setIndex(0)
        } else if (index <= 0 && dir === 'left') {
            setIndex(3)
        } else if (dir === 'right') {
            setIndex(index + 1)
        } else if (dir === 'left') {
            setIndex(index - 1)
        }
    }

    useEffect(() => {
        if (interval) clearInterval(interval)
        const currentInterval = setInterval(() => handleDir('right'), 5000)
        pushInterval(currentInterval)
    }, [index])

    return (
        <section className="relative cut-top -mt-40">
            <Carousel
                onLeft={() => handleDir('left')}
                onRight={() => handleDir('right')}
            >
                <CarouselContent index={index} className="full-screen--40">
                    {content.map((data, i) => (
                        <CarouselItem key={i} {...data} />
                    ))}
                </CarouselContent>
                <Anchor
                    size={4}
                    onClickAnchor={i => setIndex(i)}
                    index={index}
                />
            </Carousel>
        </section>
    )
}
