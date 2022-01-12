import { useTranslation } from 'react-i18next'

export default function Header() {
    const { t } = useTranslation()

    return (
        <header
            className="bg-service-header bg-cover flex items-center justify-center"
            style={{ height: '620px' }}
        >
            <div className="xl:max-w-xl text-white text-center px-6 md:px-0">
                <h1 className="text-4xl sm:text-6xl mb-5 font-sofia-bold xl:text-8xl xl:mb-16">
                    {t('Always on the-')}{' '}
                    <span className="font-sofia-bold text-accent">
                        {t('-avant-garde')}
                    </span>
                </h1>
                <p className="text-xl">{t('Discover what we...')}</p>
            </div>
        </header>
    )
}
