import { useTranslation } from 'react-i18next'

export default function ApiDevelopment() {
    const { t } = useTranslation()
    return (
        <section>
            <div className="p-4 xl:px-0 xl:max-w-5xl xl:w-full xl:mx-auto grid grid-cols-1 xl:gap-36 xl:grid-cols-2 ">
                <div className="xl:order-2 flex justify-left items-center w-full xl:justify-center">
                    <img
                        className="object-cover w-3/4 xl:max-w-full xl:max-h-full xl:w-full xl:mr-0"
                        src="../img/chart.png"
                    />
                </div>
                <div className="mt-8">
                    <h2 className="text-subtle font-sofia-bold text-3xl mb-6 xl:text-4xl">
                        {t('API development')}
                    </h2>
                    <p className="text-normal text-base mb-6">
                        {t('A device that...')}
                    </p>
                    <ul className="pl-4 text-subtle">
                        <li className="list-disc">{t('The range of...')}</li>
                        <li className="list-disc">
                            {t('The skeleton plan of...')}
                        </li>
                        <li className="list-disc">{t('The relative...')}</li>
                        <li className="list-disc">{t('The effect of...')}</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
