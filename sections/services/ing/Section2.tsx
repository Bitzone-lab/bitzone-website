import { useTranslation } from 'react-i18next'

export default function Section2() {
    const { t } = useTranslation()

    return (
        <section className="bg-base-100">
            <div className="max-w-7xl w-full mx-auto py-40 flex items-center flex-wrap md:flex-nowrap px-8">
                <div className="w-full md:w-1/2 flex justify-center md:justify-around md:pr-16 mb-10">
                    <img
                        className="hidden md:block"
                        src="/images/services/mobile.png"
                        alt="red-cloud"
                        width="181"
                        height="211"
                    />
                    <img
                        className=""
                        src="/images/services/pc.png"
                        alt="red-cloud"
                        width="211"
                        height="211"
                    />
                </div>
                <div className="w-full md:w-1/2 md:pl-16">
                    <h2 className="text-3xl font-sofia-semibold text-secondary mb-10">
                        {t('Types of development')}
                    </h2>
                    <p className="max-w-sm text-subtle font-overpass-light">
                        {t('We offer the following...')}
                    </p>
                    <ul className="list-disc list-inside mt-12 text-subtle">
                        <li className="mb-6">{t('Mobile applications')}</li>
                        <li className="mb-6">{t('Web applications')}</li>
                        <li className="mb-6">APIs</li>
                        <li>{t('Websites')}</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
