import { useTranslation } from 'react-i18next'

export default function ApiDevelopment() {
    const { t } = useTranslation()
    return (
        <section className="py-10">
            <div className="grid grid-cols-1 xl:gap-36 xl:grid-cols-2 ">
                <div className="px-4 xl:order-2 flex justify-left items-center w-full xl:justify-center">
                    <img
                        className="object-cover w-1/2 xl:max-w-full xl:max-h-full xl:w-full xl:mr-0"
                        src="img/chart.png"
                    />
                </div>
                <div className="flex flex-col justify-center items-center px-4 mt-8 xl:px-0 xl:mt-0 ">
                    <div className="xl:w-1/2">
                        <h2 className="text-subtle font-sofia-bold text-3xl mb-8 xl:text-4xl">
                            {t('Api development')}
                        </h2>
                        <p className="text-normal text-base mb-8">
                            {t('A device that')}
                        </p>
                        <ul className="pl-4 text-subtle">
                            <li className="list-disc">{t('The range of')}</li>
                            <li className="list-disc">
                                {t('The skeleton plan of')}
                            </li>
                            <li className="list-disc">{t('The relative')}</li>
                            <li className="list-disc">{t('The effect of')}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
