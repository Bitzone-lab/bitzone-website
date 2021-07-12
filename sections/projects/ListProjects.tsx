interface ContentProject {
    name: string
    description: string
    image: string
    icons: string[]
}

const dataProjects: ContentProject[] = [
    {
        name: 'Inokuos',
        image: 'img/inokuos.png',
        description: 'Una app de limpieza global hecha con limpieza global',
        icons: [
            'img/kotlin-logo.svg',
            'img/android-logo.svg',
            'img/firebase-logo.svg',
            'img/react-logo.svg'
        ]
    },
    {
        name: 'Advance MTR',
        image: 'img/mtr.png',
        description:
            'Mediciones en tiempo reales conllevan estrategias en tiempo reales y, de vez en cuando, complejas',
        icons: [
            'img/react-logo.svg',
            'img/hasura-logo.svg',
            'img/graphQL-logo.svg',
            'img/expressJs-logo.svg',
            'img/d3Js-logo.svg',
            'img/postgresql-logo.svg'
        ]
    },
    {
        name: 'Aliados',
        image: 'img/aliados.png',
        description: 'Aplicación web realizada para Inversiones La Cruz',
        icons: [
            'img/react-logo.svg',
            'img/csharp-logo.svg',
            'img/sqlServer-logo.svg'
        ]
    }
]

export default function ListProjects() {
    return (
        <section>
            {dataProjects.map((dataProject, i) => (
                <div key={i} className="mt-8 mb-8">
                    <div>
                        <img className="bg-cover" src={dataProject.image}></img>
                    </div>
                    <div className="px-4 text-center">
                        <p className="font-sofia font-bold text-3xl text-subtle mt-8">
                            {dataProject.name}
                        </p>
                        <p className="font-sans font-light text-base text-normal mt-5">
                            {dataProject.description}
                        </p>
                        <div className={`mt-12 flex justify-center `}>
                            <div
                                className={`flex flex-wrap justify-between gap-10 ${
                                    dataProject.icons.length > 4
                                        ? 'grid grid-cols-3'
                                        : ''
                                }`}
                            >
                                {dataProject.icons.map((icon, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-center"
                                    >
                                        <img className="h-8" src={icon} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}
