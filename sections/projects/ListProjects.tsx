interface ContentProject {
    name: string
    description: string
    type: string
    image: string
    icons: string[]
}

const dataProjects: ContentProject[] = [
    {
        name: 'Inokuos',
        image: '/images/project/inokuos.jpg',
        type: 'Proyecto Móvil',
        description:
            'Plataforma tecnológica real-time que gestiona rutinas de limpieza de principio a fin, manteniendo una comunicación activa e inmediata entre todos los actores involucrados en el proceso de limpieza',
        icons: [
            'img/kotlin-logo.svg',
            'img/android-logo.svg',
            'img/firebase-logo.svg',
            'img/react-logo.svg'
        ]
    },
    {
        name: 'Advance MTR',
        image: '/images/project/mtr.jpg',
        type: 'Proyecto Web',
        description:
            'Plataforma web real-time que monitorea en dashboards gráficos datos masivos enviados por sensores IoT. Los datos se procesan y almacenan en una base de datos de series de tiempo para agilizar la ingestión y su procesamiento',
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
        image: '/images/project/aliados.jpg',
        type: 'Proyecto Web',
        description:
            'Web app que recluta a Aliados para incrementar las ventas a través de referidos. Permite el registro y gestión de aliados, referidos  de pagos.',
        icons: [
            'img/react-logo.svg',
            'img/csharp-logo.svg',
            'img/sqlServer-logo.svg'
        ]
    },
    {
        name: 'Procustodia',
        image: '/images/project/procustodia.jpg',
        type: 'Proyecto Web',
        description:
            'Diseño y desarrollo del Website corporativo de Procustodia asociado a un Headless CMS que gestiona el contenido informativo, de oficinas y documentación e información legal',
        icons: ['img/netlify.svg', 'img/nextjs.svg', 'img/prismic.svg']
    },
    {
        name: 'MinkAI',
        image: '/images/project/minkai.jpg',
        type: 'Proyecto web',
        description:
            'Diseño y construcción del Website corporativo de Procustodia asociado a un Headless CMS que gestiona el contenido informativo, de oficinas y documentación e información legal.',
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
                                className="bg-cover bg-black w-full"
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
                                <p className="text-tagline uppercase mt-8 hidden font-overpass-bold text-sm xl:block">
                                    {dataProject.type}
                                </p>
                                <p className="font-sofia font-bold text-3xl text-subtle mt-8 xl:mt-5 xl:text-4xl">
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
