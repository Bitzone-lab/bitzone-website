import { useTranslation } from 'react-i18next'

export default function Section4() {
    const { t } = useTranslation()

    return (
        <section className="bg-service-ia-project bg-cover px-8">
            <div className="max-w-7xl w-full mx-auto py-32 flex">
                <div className="w-full sm:w-1/2 text-white">
                    <h2 className="text-3xl font-sofia-semibold text-secondary mb-12">
                        {t('How can AI benefit a project?')}
                    </h2>
                    <div className="mb-4">
                        <h4 className="font-sofia-bold mb-4 w-60">
                            {t('Time optimization in processes')}
                        </h4>
                        <p className="font-overpass-light">
                            {t('By minimizing human error and...')}
                        </p>
                    </div>
                    <div>
                        <h4 className="font-sofia-bold mb-2">
                            {t('Introduce an added value')}
                        </h4>
                        <p className="font-overpass-light">
                            {t('The precision of the data...')}
                        </p>
                    </div>
                </div>
                <div className="w-1/2 hidden sm:block"></div>
            </div>
        </section>
    )
}
