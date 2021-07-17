import { useTranslation } from 'react-i18next'

export default function Features() {
    const { t } = useTranslation()
    return (
        <section className="bg-wireframes bg-cover">
            <div className="p-4 text-white">
                <h3 className="font-bold font-sofia-bold text-2xl mt-3 mb-8 pr-5">
                    {t('Source is a wireframe kit designed...')}
                </h3>
                <div className="flex flex-wrap gap-y-10 mb-20">
                    <div className="w-1/2 pr-5">
                        <p className="font-sofia-bold text-lg mb-2">
                            {t('Feature one')}
                        </p>
                        <p className="text-base">
                            {t('Web design partially...')}
                        </p>
                    </div>
                    <div className="w-1/2 pr-5">
                        <p className="font-sofia-bold text-lg mb-2">
                            {t('Feature two')}
                        </p>
                        <p className="text-base">
                            {t('The rules for displaying...')}
                        </p>
                    </div>
                    <div className="w-1/2 pr-5">
                        <p className="font-bold font-sofia-bold text-lg mb-2">
                            {t('Feature three')}
                        </p>
                        <p className="text-base">
                            {t('Paper prototypes should...')}
                        </p>
                    </div>
                    <div className="w-1/2 pr-5">
                        <p className="font-sofia-bold text-lg mb-2">
                            {t('Feature four')}
                        </p>
                        <p className="text-base">
                            {t('The relative priorities of...')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
