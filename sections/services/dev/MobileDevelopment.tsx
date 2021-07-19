import { useTranslation } from 'react-i18next'

export default function MobileDevelopment() {
    const { t } = useTranslation()
    return (
        <section className="py-10">
            <div className="grid grid-cols-1 xl:gap-36 xl:grid-cols-2 ">
                <div className="flex flex-col justify-center items-center px-4 xl:px-0 xl:mt-0 xl:order-2 ">
                    <div className="xl:w-1/2">
                        <h2 className="text-subtle font-sofia-bold text-3xl mb-8 xl:text-4xl">
                            {t('Mobile development')}
                        </h2>
                        <p className="text-normal text-base mb-8">
                            {t('By creating')}
                        </p>
                        <div className="grid grid-cols-2 gap-10">
                            <div>
                                <h3 className="text-subtle font-sofia-bold text-2xl mb-4">
                                    {t('One')}
                                </h3>
                                <p className="text-normal text-base mb-8">
                                    {t('The effect of')}
                                </p>
                            </div>
                            <div>
                                <h3 className="text-subtle font-sofia-bold text-2xl mb-4">
                                    {t('Two')}
                                </h3>
                                <p className="text-normal text-base mb-8">
                                    {t('The range of')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-8 xl:mt-0 min-w-full">
                    <img
                        className="object-cover  h-full w-full xl:max-h-full xl:mr-0"
                        src="../img/services-mobile-dev.png"
                    />
                </div>
            </div>
        </section>
    )
}
