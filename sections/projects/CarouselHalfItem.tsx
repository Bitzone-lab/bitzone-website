export function ContentHalfItem({ image, title, subtitle, back, textColor }) {
    return (
        <div
            className={`w-full pt-28 pb-28 carousel-item h-auto relative items-center bg-${back} text-${textColor}`}
        >
            <div className="max-w-lg">
                <img className="bg-cover xl:w-full" src={image}></img>
                <div className="text-right ml-10">
                    <p className="font-sofia-bold text-4xl mt-8">{title}</p>
                    <p className="font-sofia font-light text-base mt-9 mb-12">
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>
    )
}
