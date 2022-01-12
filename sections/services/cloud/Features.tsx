import { useTranslation } from 'react-i18next'

/**
 * @deprecated
 */
export default function Features() {
    const { t } = useTranslation()
    return (
        <section className="bg-wireframes bg-cover bg-center">
            <div className="p-4 text-white xl:max-w-5xl xl:w-full xl:mx-auto xl:pt-28 xl:pl-0 xl:pb-14">
                <div className="xl:max-w-2xl">
                    <h3 className="font-bold font-sofia-bold text-2xl mt-3 mb-8 pr-5 xl:pr-0">
                        {t('How can cloud...')}
                    </h3>
                    <div className="flex flex-wrap gap-y-10 mb-20 xl:gap-y-14">
                        <div className="w-1/2 pr-5 xl:pr-10">
                            <p className="font-sofia-bold text-lg mb-2">
                                {t('Save costs')}
                            </p>
                            <p className="text-base">
                                {t(
                                    'It is not necessary to have your own hardware...'
                                )}
                            </p>
                        </div>
                        <div className="w-1/2 pr-5 xl:pr-0">
                            <p className="font-sofia-bold text-lg mb-2">
                                {t('Competitive strategic advantage')}
                            </p>
                            <p className="text-base">
                                {t('Deployment times are almost nil...')}
                            </p>
                        </div>
                        <div className="w-1/2 pr-5 xl:pr-10">
                            <p className="font-bold font-sofia-bold text-lg mb-2">
                                {t('High availability')}
                            </p>
                            <p className="text-base">{t('Cloud hosting...')}</p>
                        </div>
                        <div className="w-1/2 pr-5 xl:pr-0">
                            <p className="font-sofia-bold text-lg mb-2">
                                {t('Fast performance')}
                            </p>
                            <p className="text-base">
                                {t('Delivers high-performance servers...')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
