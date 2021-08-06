interface PropsCardImage {
    src: string
    title: string
    descriptionBack: string
    x?: number
    y?: number
}

function CardImage({
    src,
    title,
    descriptionBack,
    x = 0,
    y = 0
}: PropsCardImage) {
    return (
        <div
            className="card-image-wrapper flip-left"
            style={{
                transform: `translate(${x}%, ${y}%)`
            }}
        >
            <div className="card-image shadow-md">
                <div className="front">
                    <img src={src} className="pb-6" />
                    <p className="absolute top-40 text-white text-sm text-center">
                        {title}
                    </p>
                </div>
                <div className="back bg-accent">
                    <p className="pb-5 font-sofia text-subtle">{title}</p>
                    <p className="text-sm text-subtle font-overpass-light">
                        {descriptionBack}
                    </p>
                </div>
            </div>
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
                    descriptionBack="Buscamos siempre que nuestros proyectos sean de mayor calidad"
                    x={50}
                    y={5}
                />
                <CardImage
                    title="Responsabilidad social"
                    src="img/social_responsability.svg"
                    descriptionBack="Creemos en el cambio a través de la tecnología"
                    x={25}
                    y={50}
                />
                <CardImage
                    title="Compromiso"
                    src="img/compromise.svg"
                    descriptionBack="Con nuestros clientes, la sociedad, nuestro equipo y nuestro entorno"
                    x={-50}
                />
            </div>
            <div className="flex justify-between xl:max-w-xl mx-auto mb-28">
                <CardImage
                    title="Confianza"
                    src="img/confidence.svg"
                    descriptionBack="Respaldamos la calidad humana de cada uno de los integrantes del equipo"
                    y={-10}
                />
                <CardImage
                    title="Unidad"
                    src="img/unit.svg"
                    descriptionBack="Somos un equipo que avanza unido a los cambios"
                    x={-20}
                />
            </div>
            <div className="flex justify-between">
                <CardImage
                    title="Flexibidad"
                    src="img/flexibility.svg"
                    descriptionBack="Esencial para el correcto desarrollo de las actividades que realizamos a diario"
                    y={-75}
                />
                <CardImage
                    title="Libertad"
                    src="img/liberty.svg"
                    descriptionBack="Creemos en la capacidad de cada persona de tomar sus propias desiciones"
                    x={35}
                />
                <CardImage
                    title="Respeto"
                    src="img/respect.svg"
                    descriptionBack="Reconocemos en nuestro equipo a personas plenas y que merecen el reconocimiento de sus acciones en pro de la organización"
                    y={-65}
                />
            </div>
        </div>
    )
}
