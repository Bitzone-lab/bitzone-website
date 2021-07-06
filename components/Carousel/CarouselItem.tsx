import Button from '../Button'
import Icon from '../Icon'

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
                        <div className="xl:w-2/4">
                            <h2 className="font-sofia mb-4 uppercase">
                                {props.subtitle}
                            </h2>
                            <h1 className="text-3xl font-sofia mb-8">
                                {props.title}
                            </h1>
                            <p className="mb-5 text-md">{props.textarea}</p>
                            <Button className="btn-sm">Descúbrelo</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute w-full px-5 text-white top-0">
                <div className="max-w-5xl w-full mx-auto mt-8 xl:mt-16 xl:flex justify-between">
                    <h3 className="text-2xl px-4">
                        Somos equipo, somos Bitzone
                    </h3>
                    <Icon
                        name="arrow-down"
                        size={18}
                        className="mt-2 cursor-pointer hidden xl:inline"
                    />
                </div>
            </div>
        </>
    )
}
