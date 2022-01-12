import { useTranslation } from 'react-i18next'

export default function Section2() {
    const { t } = useTranslation()

    return (
        <section>
            <div className="max-w-7xl w-full mx-auto py-24 flex px-8 xl:px-0 flex-wrap sm:flex-nowrap text-center sm:text-left">
                <div className="w-full sm:w-1/2">
                    <img
                        src="/images/services/red-cloud.png"
                        alt="red-cloud"
                        className="mx-auto mb-6"
                    />
                </div>
                <div className="w-full sm:w-1/2">
                    <h2 className="text-3xl font-sofia-semibold text-secondary mb-10">
                        {t('Infraestructure')}
                    </h2>
                    <p className="max-w-xl text-subtle font-overpass-light">
                        {t('We use AWS services such as...')}
                    </p>
                </div>
            </div>
        </section>
    )
}
