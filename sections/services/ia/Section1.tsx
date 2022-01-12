import { useTranslation } from 'react-i18next'

export default function Section1() {
    const { t } = useTranslation()

    return (
        <section>
            <div className="max-w-7xl w-full mx-auto py-24 flex items-center px-8 flex-wrap sm:flex-nowrap text-center sm:text-left">
                <div className="w-full sm:w-1/2">
                    <h2 className="text-3xl font-sofia-semibold text-secondary mb-10">
                        Customer Intelligence
                    </h2>
                    <p className="max-w-lg text-subtle font-overpass-light mx-auto sm:mx-0 mb-6 sm:mb-0">
                        {t('Do you need to obtain...')}
                    </p>
                </div>
                <div className="w-full sm:w-1/2">
                    <img
                        src="/images/services/user-idea.png"
                        alt="red-cloud"
                        className="mx-auto"
                    />
                </div>
            </div>
        </section>
    )
}
