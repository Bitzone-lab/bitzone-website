import { useTranslation } from 'react-i18next'

export default function Section3() {
    const { t } = useTranslation()

    return (
        <section>
            <div className="max-w-7xl w-full mx-auto py-24 flex items-center px-8 flex-wrap sm:flex-nowrap text-center sm:text-left">
                <div className="w-full sm:w-1/2">
                    <h2 className="text-3xl font-sofia-semibold text-secondary mb-10 sm:w-72">
                        {t('Natural language processing')}
                    </h2>
                    <p className="max-w-lg text-subtle font-overpass-light mx-auto sm:mx-0 mb-6 sm:mb-0">
                        {t('Do you need to process natural...')}
                    </p>
                </div>
                <div className="w-full sm:w-1/2">
                    <img
                        src="/images/services/ia2.png"
                        alt="red-cloud"
                        className="mx-auto mb-6 sm:mb-0"
                        height="260"
                        width="260"
                    />
                </div>
            </div>
        </section>
    )
}
