import { useTranslation } from 'react-i18next'

export default function Header() {
    const { t } = useTranslation()

    return (
        <header className="bg-dev bg-cover bg-center">
            <div className="p-4 text-white text-center xl:max-w-5xl xl:w-full xl:mx-auto xl:text-left xl:pl-0">
                <h1 className="font-sofia-bold text-6xl xl:text-9xl mb-4 mt-32">
                    DEV
                </h1>
                <p className="font-light font-sofia text-base mb-6 xl:mb-12 xl:font-normal xl:text-xl">
                    {t('Software development')}
                </p>
                <p className="font-normal text-lg mb-16 xl:max-w-xl xl:mb-24">
                    {t('It means for us to...')}
                </p>
            </div>
        </header>
    )
}
