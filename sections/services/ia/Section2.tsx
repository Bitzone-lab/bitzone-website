import { useTranslation } from 'react-i18next'

export default function Section1() {
    const { t } = useTranslation()

    return (
        <section>
            <div className="max-w-7xl w-full mx-auto py-24 flex items-center px-8 flex-wrap sm:flex-nowrap text-center sm:text-left">
                <div className="w-full sm:w-1/2">
                    <img
                        src="/images/services/eye.png"
                        alt="eye"
                        className="mx-auto sm:mx-0 mb-6"
                    />
                </div>
                <div className="w-full sm:w-1/2">
                    <h2 className="text-3xl font-sofia-semibold text-secondary mb-10">
                        {t('Artificial vision')}
                    </h2>
                    <p className="max-w-xl text-subtle font-overpass-light mx-auto sm:mx-0">
                        {t('Do you need to analyze...')}
                    </p>
                </div>
            </div>
        </section>
    )
}
