import Link from 'next/link'

export interface PropsCarouselItem {
    title: string
    subtitle: string
    textarea: string
    link: string
    image: string
}

export default function CarouselItem(props: PropsCarouselItem) {
    return (
        <>
            <div className="w-full carousel-item h-full relative items-center">
                <img src={props.image} className="w-full h-full object-cover" />
                <div className="absolute w-full px-5 text-white">
                    <div className="max-w-5xl w-full mx-auto">
                        <div>
                            <h2 className="mb-4 text-sm font-overpass-bold uppercase">
                                {props.subtitle}
                            </h2>
                            <h1 className="text-4xl font-sofia-bold mb-8 xl:w-3/4">
                                {props.title}
                            </h1>
                            <p className="mb-5 font-overpass text-base xl:w-2/4">
                                {props.textarea}
                            </p>
                            <Link href={props.link}>
                                <a className="btn btn-accent font-sofia-bold rounded-none normal-case text-lg text-subtle btn-sm">
                                    Descúbrelo
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
