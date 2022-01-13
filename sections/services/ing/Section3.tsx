import { useTranslation } from 'react-i18next'

export default function Section3() {
    const { t } = useTranslation()

    return (
        <section className="bg-service-se-benefits bg-cover">
            <div className="max-w-7xl w-full mx-auto py-40 flex px-8">
                <div className="w-full lg:w-1/2 text-white px-8 lg:px-0">
                    <h2 className="text-2xl md:text-3xl font-sofia-semibold text-secondary mb-16">
                        {t('How can software...')}
                    </h2>
                    <h4 className="font-sofia-bold mb-2">
                        {t('Professional exposure of your brand')}
                    </h4>
                    <p className="font-overpass-light mb-8">
                        {t('Have a website or...')}
                    </p>
                    <h4 className="font-sofia-bold mb-2">
                        {t('Processes’ systematization')}
                    </h4>
                    <p className="font-overpass-light">
                        {t('We will help you...')}
                    </p>
                </div>
                <div className="w-1/2 hidden lg:block"></div>
            </div>
        </section>
    )
}
