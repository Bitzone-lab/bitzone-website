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
    },
    {
        name: 'Procustodia',
        image: 'img/procustodia.jpg',
        description:
            'Otra pequeña y breve descripción de lo que trató este proyecto, en dos líneas para que se vea bonito',
        icons: ['img/netlify.svg', 'img/nextjs.svg', 'img/prismic.svg']
    }
]

export default function ListProjects() {
    return (
        <section>
            {dataProjects.map((dataProject, i) => (
                <div
                    key={i}
                    className="pt-8 pb-8 xl:max-w-5xl xl:w-full xl:mx-auto xl:pt-14 xl:pb-14"
                >
                    <div className="xl:flex">
                        <div
                            className={`xl:w-1/2 ${
                                i % 2 === 0 ? 'xl:order-2' : 'xl:order-1'
                            }`}
                        >
                            <img
                                className="bg-cover xl:w-full"
                                src={dataProject.image}
                            ></img>
                        </div>
                        <div
                            className={`px-4 text-center xl:w-1/2 xl:px-0 ${
                                i % 2 === 0
                                    ? 'xl:pr-20 xl:order-1'
                                    : 'xl:pl-20 xl:order-2'
                            }`}
                        >
                            <div className="xl:flex xl:justify-center xl:flex-col xl:items-center xl:h-full">
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
                                                ? 'grid grid-cols-3 xl:flex'
                                                : ''
                                        }`}
                                    >
                                        {dataProject.icons.map(
                                            (icon, index) => (
                                                <div
                                                    key={index}
                                                    className="flex justify-center"
                                                >
                                                    <img
                                                        className="h-8"
                                                        src={icon}
                                                    />
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}
