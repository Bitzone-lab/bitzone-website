import { useTranslation } from 'react-i18next'

export default function HeaderCloud() {
    const { t } = useTranslation()
    return (
        <header className="bg-cloud bg-cover">
            <div className="p-4 text-white text-center">
                <h1 className="font-bold font-sofia-bold text-5xl mb-4 mt-32">
                    CLOUD
                </h1>
                <p className="font-light font-sofia text-base mb-6">
                    Cloud computing
                </p>
                <p className="font-light font-sans text-lg mb-16">
                    {t('For us it represetnts and opportunity...')}
                </p>
            </div>
        </header>
    )
}
