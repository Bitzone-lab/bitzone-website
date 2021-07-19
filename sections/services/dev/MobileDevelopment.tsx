import { useTranslation } from 'react-i18next'

export default function MobileDevelopment() {
    const { t } = useTranslation()
    return (
        <section>
            <div className="py-10 px-4 xl:max-w-5xl xl:w-full xl:mx-auto grid grid-cols-1 xl:gap-36 xl:grid-cols-2  ">
                <div className="xl:order-2 ">
                    <h2 className="text-subtle font-sofia-bold text-3xl mb-6 xl:text-4xl">
                        {t('Mobile development')}
                    </h2>
                    <p className="text-normal text-base mb-6">
                        {t('By creating')}
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-subtle font-sofia-bold text-2xl mb-4">
                                {t('One')}
                            </h3>
                            <p className="text-normal text-base mb-6">
                                {t('The effect of')}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-subtle font-sofia-bold text-2xl mb-4">
                                {t('Two')}
                            </h3>
                            <p className="text-normal text-base mb-6">
                                {t('The range of')}
                            </p>
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
