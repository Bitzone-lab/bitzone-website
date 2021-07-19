import { useTranslation } from 'react-i18next'

export default function HeaderUx() {
    const { t } = useTranslation()
    return (
        <header className="bg-ux bg-cover bg-center">
            <div className="p-4 text-white text-center xl:max-w-6xl xl:w-full xl:mx-auto xl:text-left xl:pl-0">
                <h1 className="font-bold font-sofia-bold text-5xl mb-4 mt-32 xl:mb-12 xl:text-8xl">
                    UX
                </h1>
                <p className="font-light font-sofia text-base mb-6 xl:mb-12 xl:font-normal xl:text-2xl">
                    {t('User experience')}
                </p>
                <p className="font-normal text-lg text-left mb-16 mx-3 xl:mx-0 xl:max-w-xl xl:mb-24">
                    {t('To talk about UX...')}
                </p>
            </div>
        </header>
    )
}
