import { useTranslation } from 'react-i18next'

export default function HeaderCloud() {
    const { t } = useTranslation()
    return (
        <header className="bg-cloud bg-cover bg-center">
            <div className="p-4 text-white text-center xl:max-w-5xl xl:w-full xl:mx-auto xl:text-left xl:pl-20">
                <h1 className="font-bold font-sofia-bold text-5xl mb-4 mt-32 xl:mb-12">
                    CLOUD
                </h1>
                <p className="font-light font-sofia text-base mb-6 xl:mb-12 xl:font-normal">
                    Cloud computing
                </p>
                <p className="font-normal text-lg mb-16 xl:max-w-xl xl:mb-24">
                    {t('For us it represetnts and opportunity...')}
                </p>
            </div>
        </header>
    )
}
