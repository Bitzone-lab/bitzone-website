export interface PropsCarouselItem {
    title: string
    description: string
    image: string
}

export default function CarouselItem(props: PropsCarouselItem) {
    return (
        <>
            <div className="w-4/5 xl:w-1/3 carousel-item h-full">
                <div className="flex-col items-center px-2">
                    <img src={props.image} className="w-full d-block" />
                    <div className="w-full">
                        <div className="max-w-5xl w-full mx-auto text-center">
                            <h3 className="mb-4 mt-4 font-sofia-semibold text-subtle text-2xl">
                                {props.title}
                            </h3>
                            <p className="mb-5 text-md text-normal">
                                {props.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
