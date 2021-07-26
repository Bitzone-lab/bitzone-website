import { useTranslation } from 'react-i18next'

export default function Section3() {
    const { t } = useTranslation()
    return (
        <section>
            <div className="p-10 xl:px-0 xl:max-w-5xl xl:w-full xl:mx-auto grid grid-cols-1 xl:gap-36 xl:grid-cols-2">
                <div className="xl:order-2 ">
                    <h2 className="text-subtle font-sofia-bold text-2xl mb-6 xl:text-3xl">
                        {t('We adapt to you')}
                    </h2>
                    <p className="text-normal text-base mb-14">
                        {t('We focus on creating...')}
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-subtle font-sofia-bold text-2xl mb-4">
                                {t('Desktop')}
                            </h3>
                            <p className="text-normal text-base mb-6">
                                {t('Among our projects, Advance...')}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-subtle font-sofia-bold text-2xl mb-4">
                                {t('Mobile')}
                            </h3>
                            <p className="text-normal text-base mb-6">
                                {t('Among our projects, ProCustodia...')}
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
