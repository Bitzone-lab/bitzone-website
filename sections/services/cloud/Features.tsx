import { useTranslation } from 'react-i18next'

export default function Features() {
    const { t } = useTranslation()
    return (
        <section className="bg-wireframes bg-cover bg-center">
            <div className="p-4 text-white xl:max-w-5xl xl:w-full xl:mx-auto xl:pl-24 xl:pt-28 xl:pb-14">
                <div className="xl:max-w-2xl">
                    <h3 className="font-bold font-sofia-bold text-2xl mt-3 mb-8 pr-5 xl:pr-0">
                        {t('Source is a wireframe kit designed...')}
                    </h3>
                    <div className="flex flex-wrap gap-y-10 mb-20 xl:gap-y-14">
                        <div className="w-1/2 pr-5 xl:pr-10">
                            <p className="font-sofia-bold text-lg mb-2">
                                {t('Feature one')}
                            </p>
                            <p className="text-base">
                                {t('Web design partially...')}
                            </p>
                        </div>
                        <div className="w-1/2 pr-5 xl:pr-0">
                            <p className="font-sofia-bold text-lg mb-2">
                                {t('Feature two')}
                            </p>
                            <p className="text-base">
                                {t('The rules for displaying...')}
                            </p>
                        </div>
                        <div className="w-1/2 pr-5 xl:pr-10">
                            <p className="font-bold font-sofia-bold text-lg mb-2">
                                {t('Feature three')}
                            </p>
                            <p className="text-base">
                                {t('Paper prototypes should...')}
                            </p>
                        </div>
                        <div className="w-1/2 pr-5 xl:pr-0">
                            <p className="font-sofia-bold text-lg mb-2">
                                {t('Feature four')}
                            </p>
                            <p className="text-base">
                                {t('The relative priorities of...')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
