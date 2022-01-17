import { useTranslation } from 'react-i18next'

interface ContentProject {
    name: string
    description: string
    type: string
    image: string
    icons: string[]
}

export default function ListProjects() {
    const { t } = useTranslation()

    const dataProjects: ContentProject[] = [
        {
            name: 'Inokuos',
            image: '/images/project/inokuos.jpg',
            type: t('Mobile project'),
            description: t('Real-time technological platform...'),
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
            type: t('Web Project'),
            description: t('Real-time web platform that...'),
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
            type: t('Web Project'),
            description: t('Web app that recruits Aliados to...'),
            icons: [
                'img/react-logo.svg',
                'img/csharp-logo.svg',
                'img/sqlServer-logo.svg'
            ]
        },
        {
            name: 'Procustodia',
            image: '/images/project/procustodia.jpg',
            type: t('Web Project'),
            description: t('Design and construction of the...'),
            icons: ['img/netlify.svg', 'img/nextjs.svg', 'img/prismic.svg']
        },
        {
            name: 'Minkai',
            image: '/images/project/minkai.jpg',
            type: t('AI & Web Project'),
            description: t('Recruitment management platform...'),
            icons: [
                'img/react-logo.svg',
                'images/project/python.png',
                'images/project/aws.png'
            ]
        }
    ]

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
                                <p className="text-tagline uppercase mt-8 font-overpass-bold text-sm">
                                    {dataProject.type}
                                </p>
                                <p className="font-sofia font-bold text-3xl text-subtle mt-4 xl:mt-5 xl:text-4xl">
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
