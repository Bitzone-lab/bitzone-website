import { useTranslation } from 'react-i18next'

export default function Header() {
    const { t } = useTranslation()

    return (
        <header
            className="hero bg-about-header cover"
            style={{ height: '700px' }}
        >
            <div className="hero-content justify-start max-w-7xl w-full">
                <div className="px-8">
                    <h1 className="mb-8 text-5xl font-bold font-sofia-semibold text-white">
                        {t('We are a-')}{' '}
                        <span className="font-sofia-semibold text-accent">
                            {t('-community')}
                        </span>
                    </h1>
                    <p className="mb-5 text-lg max-w-2xl text-white">
                        {t(`Bitzone's culture is...`)}
                    </p>
                </div>
            </div>
        </header>
    )
}
