import { useTranslation } from 'react-i18next'

export default function ApiDevelopment() {
    const { t } = useTranslation()
    return (
        <section>
            <div className="p-10 xl:px-0 xl:max-w-5xl xl:w-full xl:mx-auto grid grid-cols-1 xl:gap-36 xl:grid-cols-2">
                <div className="xl:order-2 flex justify-left items-center w-full xl:justify-center">
                    <img
                        className="object-cover w-3/4 xl:max-w-full xl:max-h-full xl:w-full xl:mr-0"
                        src="../img/chart.png"
                    />
                </div>
                <div className="mt-8">
                    <h2 className="text-subtle font-sofia-bold text-2xl mb-6 xl:text-3xl">
                        {t('Our technologies')}
                    </h2>
                    <p className="text-normal text-base mb-6">
                        {t('Depending on the complexity of...')}
                    </p>
                    <ul className="pl-4 text-subtle">
                        <li className="list-disc mb-4">
                            Flask, React y NextJS
                        </li>
                        <li className="list-disc mb-4">
                            Python, Javascript y Typescript
                        </li>
                        <li className="list-disc mb-4">
                            Lucidchart, Instagantt, Coda y Jira
                        </li>
                        <li className="list-disc mb-4">
                            Docker y Docker Compose
                        </li>
                        <li className="list-disc">Git. Github y Gitlab</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
