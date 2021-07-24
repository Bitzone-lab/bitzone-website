import { useEffect, useRef } from 'react'
import useIntervalCarousel from '../../hooks/useIntervalCarousel'
import { viewportWidth } from '../../utilities/viewport'
import classnames from 'classnames'

interface PropsCarouselItem {
    title: string
    textAccent: string
    className?: string
}

function CarouselItem({ className, title, textAccent }: PropsCarouselItem) {
    return (
        <div
            className={classnames(
                'carousel-item pt-28 w-full bg-cover bg-center',
                className
            )}
        >
            <div className="px-4">
                <h2 className="font-overpass mb-6">QUIÉNES SOMOS</h2>
                <h1 className="text-5xl font-sofia-bold">{title}</h1>
                <p className="font-overpass mt-6">{textAccent}</p>
            </div>
        </div>
    )
}

interface PropsContentItem {
    index: string
    description: string
    onClick: (ev: any) => void
}

function ContentItem({ index, description, onClick }: PropsContentItem) {
    return (
        <div onClick={onClick} className="carousel-item slide-content-item">
            <div className="px-4">
                <span className="font-sofia-bold text-accent text-lg">
                    {index}
                </span>
                <div className="flex mt-3 mb-6">
                    <div
                        style={{ height: '1px' }}
                        className="w-1/2 bg-accent"
                    />
                    <div
                        style={{ height: '1px' }}
                        className="w-1/2 bg-base-300"
                    />
                </div>
                <p className="font-overpass">{description}</p>
            </div>
        </div>
    )
}

export default function Hero() {
    const { index, setIndex } = useIntervalCarousel(2, 10000)
    const div1Ref = useRef<HTMLDivElement>(null)
    const div2Ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const width = viewportWidth()
        const d1 = div1Ref.current
        const d2 = div2Ref.current
        d1?.scrollTo(width * index, 0)
        if (d2) {
            const w2 = d2.clientWidth * (85 / 100)
            d2.scrollTo(w2 * index, 0)
        }
    }, [index])

    return (
        <section className="h-screen text-white">
            <div
                ref={div1Ref}
                className="carousel h-4/6"
                style={{ scrollBehavior: 'smooth' }}
            >
                <CarouselItem
                    className="bg-about1"
                    title="Somos una comunidad"
                    textAccent="más que una empresa"
                />
                <CarouselItem
                    className="bg-about2"
                    title="Priorizamos la creatividad"
                    textAccent="en un entorno moderno y horizontal"
                />
                <CarouselItem
                    className="bg-about3"
                    title="No solo buscamos talento"
                    textAccent="lo hacemos crecer para brindarle un futuro mejor"
                />
            </div>
            <div className="slide-content h-2/6 bg-linear-primary pt-10">
                <div ref={div2Ref} className="carousel">
                    <ContentItem
                        index="01"
                        description="Más que una empresa, somos una comunidad."
                        onClick={() => setIndex(0)}
                    />
                    <ContentItem
                        index="02"
                        description="Trabajamos en un entorno donde prima la creatividad y la horizontalidad."
                        onClick={() => setIndex(1)}
                    />
                    <ContentItem
                        index="03"
                        description="Buscamos ser agentes de cambio para cada uno de los talentos de nuestro equipo."
                        onClick={() => setIndex(2)}
                    />
                </div>
            </div>
        </section>
    )
}
