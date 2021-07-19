import { useTranslation } from 'react-i18next'

export default function Header() {
    const { t } = useTranslation()

    return (
        <header className="bg-services-dev text-white">
            <div className="p-4 text-white text-center xl:max-w-5xl xl:w-full xl:mx-auto xl:text-left xl:pl-0">
                <h1 className="text-5xl xl:text-8xl font-sofia-semibold mt-32">
                    DEV
                </h1>
                <p className="xl:text-2xl font-sofia xl:block xl:max-w-sm mb-6 xl:mb-12">
                    {t('Software development')}
                </p>
                <p className="text-lg text-left mb-16 xl:mb-24 xl:max-w-xl">
                    {t('To talk about UX/UI')}
                </p>
            </div>
        </header>
    )
}
