export interface Content {
    title: string
    subtitle: string
    textarea: string
    link: string
    image: string
}

export default function Carousel(props: { content: Content[] }) {
    return (
        <section className="relative">
            <div className="w-full h-screen carousel">
                {props.content.map((data, i) => (
                    <div
                        key={i}
                        className="w-full carousel-item h-full relative"
                    >
                        <img
                            src={data.image}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute w-full h-full top-0 px-5 pt-20 text-white">
                            <h2 className="font-sofia mb-4 uppercase">
                                {data.subtitle}
                            </h2>
                            <h1 className="text-3xl font-sofia mb-8">
                                {data.title}
                            </h1>
                            <p className="mb-5 text-md">{data.textarea}</p>
                            <button className="btn btn-accent font-sofia rounded-none normal-case text-lg">
                                Descúbrelo
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center absolute px-5 pb-10 bottom-0 z-10">
                {props.content.map((_, i) => (
                    <div
                        key={i}
                        className="rounded-full bg-white h-3 w-3 border-2 border-white mr-3"
                    />
                ))}
            </div>
        </section>
    )
}
