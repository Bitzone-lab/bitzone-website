export interface PropsCarouselItem {
    title: string
    description: string
    image: string
    caption: string
}

export default function CarouselItem(props: PropsCarouselItem) {
    return (
        <>
            <div className="w-4/5 xl:w-1/3 carousel-item h-full">
                <div className="flex-col items-center px-2">
                    <img src={props.image} className="w-full d-block" />
                    <div className="w-full">
                        <div className="max-w-5xl w-full mx-auto text-center">
                            <h3 className="mb-4 mt-4 font-sofia-bold text-subtle">
                                {props.title}
                            </h3>
                            <p className="mb-5 text-md text-subtle">
                                {props.description}
                            </p>
                            <span className="text-normal">{props.caption}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
