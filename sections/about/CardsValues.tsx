interface PropsCardImage {
    src: string
    title: string
    x?: number
    y?: number
}

function CardImage({ src, title, x = 0, y = 0 }: PropsCardImage) {
    return (
        <div
            className="bg-radial-primary w-40 h-40 flex items-center justify-center rounded-lg relative shadow-md"
            style={{
                transform: `translate(${x}%, ${y}%)`
            }}
        >
            <img src={src} className="pb-6" />
            <p className="absolute top-32 text-white text-sm text-center">
                {title}
            </p>
        </div>
    )
}

export default function CardsValues() {
    return (
        <div className="py-24 hidden xl:block">
            <div className="flex justify-between mb-40">
                <CardImage
                    title="Excelencia"
                    src="img/excellence.svg"
                    x={50}
                    y={5}
                />
                <CardImage
                    title="Responsabilidad social"
                    src="img/social_responsability.svg"
                    x={25}
                    y={50}
                />
                <CardImage
                    title="Compromiso"
                    src="img/compromise.svg"
                    x={-50}
                />
            </div>
            <div className="flex justify-between xl:max-w-xl mx-auto mb-28">
                <CardImage title="Confianza" src="img/confidence.svg" y={-10} />
                <CardImage title="Unidad" src="img/unit.svg" x={-20} />
            </div>
            <div className="flex justify-between">
                <CardImage
                    title="Flexibidad"
                    src="img/flexibility.svg"
                    y={-75}
                />
                <CardImage title="Libertad" src="img/liberty.svg" x={35} />
                <CardImage title="Respeto" src="img/respect.svg" y={-65} />
            </div>
        </div>
    )
}
