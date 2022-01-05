import useIntervalCarousel from '../../hooks/useIntervalCarousel'
import classnames from 'classnames'
import { useEffect, useRef } from 'react'
import { viewportWidth } from '../../utilities/viewport'

interface PropsContentItem {
    index: string
    description: string
    onClick: (ev: any) => void
    active: boolean
}

function ContentItem({
    index,
    description,
    onClick,
    active
}: PropsContentItem) {
    return (
        <div onClick={onClick} className="w-4/12 cursor-pointer">
            <div className="px-4">
                <span
                    className={classnames('text-lg', {
                        'text-accent': active,
                        'font-sofia-bold': active,
                        'font-sofia-light': !active
                    })}
                >
                    {index}
                </span>
                <div className="flex mt-3 mb-6">
                    <div
                        style={{ height: '1px' }}
                        className={classnames('w-1/2', {
                            'bg-accent': active,
                            'bg-base-300': !active
                        })}
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

interface PropsCarouselItem {
    title: string
    textAccent: string
    image: string
}

function CarouselItem({ image, title, textAccent }: PropsCarouselItem) {
    return (
        <div className="carousel-item w-full relative flex justify-center items-center">
            <img
                className="h-full max-w-6xl absolute right-0 object-cover"
                src={`img/${image}`}
                alt=""
            />
            <div className="w-full max-w-5xl pt-28 relative z-1">
                <h2 className="font-overpass mb-6 text-sm ">QUIÉNES SOMOS</h2>
                <h1 className="text-5xl font-sofia-bold max-w-md xl:max-w-4xl xl:text-8xl">
                    {title}
                </h1>
                <p className="font-overpass font-light mt-6 xl:text-2xl">
                    {textAccent}
                </p>
            </div>
        </div>
    )
}

/**
 * @deprecated
 */
export default function HeroD() {
    const { index, setIndex } = useIntervalCarousel(2, 10000)
    const div = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const width = viewportWidth()
        const d1 = div.current
        d1?.scrollTo(width * index, 0)
    }, [index])

    return (
        <section
            id="about-d-section"
            className="h-screen text-white hidden xl:block bg-linear-primary"
        >
            <div
                ref={div}
                className="carousel d-slide-carousel"
                style={{ scrollBehavior: 'smooth' }}
            >
                <CarouselItem
                    image="about_1.png"
                    title="Somos una comunidad"
                    textAccent="más que una empresa"
                />
                <CarouselItem
                    image="about_2.png"
                    title="Priorizamos la creatividad"
                    textAccent="en un entorno moderno y horizontal"
                />
                <CarouselItem
                    image="about_3.png"
                    title="No solo buscamos talento"
                    textAccent="lo hacemos crecer para brindarle un futuro mejor"
                />
            </div>
            <div className="slide-content d-slide-content pt-10">
                <div className="w-full max-w-5xl mx-auto flex">
                    <ContentItem
                        index="01"
                        active={index === 0}
                        description="Más que una empresa, somos una comunidad."
                        onClick={() => setIndex(0)}
                    />
                    <ContentItem
                        index="02"
                        active={index === 1}
                        description="Trabajamos en un entorno donde prima la creatividad y la horizontalidad."
                        onClick={() => setIndex(1)}
                    />
                    <ContentItem
                        index="03"
                        active={index === 2}
                        description="Buscamos ser agentes de cambio para cada uno de los talentos de nuestro equipo."
                        onClick={() => setIndex(2)}
                    />
                </div>
            </div>
        </section>
    )
}
