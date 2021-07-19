import { useTranslation } from 'react-i18next'

export default function Header() {
    const { t } = useTranslation()

    return (
        <header className="hero min-h-screen bg-services-dev text-white">
            <div className="hero-content text-center xl:text-left">
                <div className="max-w-md xl:max-w-screen-lg">
                    <h1 className="text-5xl xl:text-8xl font-sofia-semibold leading-tight">
                        DEV
                    </h1>
                    <p className="xl:text-2xl font-sofia xl:block xl:max-w-sm mt-7">
                        {t('Software development')}
                    </p>
                    <p className="text-lg text-left mt-7">
                        {t('To talk about UX/UI')}
                    </p>
                </div>
            </div>
        </header>
    )
}
