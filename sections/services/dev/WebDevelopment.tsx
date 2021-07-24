import { useTranslation } from 'react-i18next'

export default function WebDevelopment() {
    const { t } = useTranslation()
    return (
        <section>
            <div className="py-7 pl-4 xl:pl-0 xl:max-w-5xl xl:w-full xl:mx-auto grid grid-cols-1 xl:gap-36 xl:grid-cols-2">
                <div className="w-full flex justify-end items-center xl:order-2 overflow-hidden">
                    <img
                        className="object-cover max-w-full max-h-64 -mr-24 xl:max-h-full xl:mr-0"
                        src="../img/services-web-dev.png"
                    />
                </div>
                <div className="mt-8 pr-4">
                    <h2 className="text-subtle font-sofia-bold text-2xl mb-6 xl:text-3xl">
                        {t('Web development')}
                    </h2>
                    <p className="text-normal text-base">{t('By creating')}</p>
                    <p className="text-normal text-base mt-4">
                        {t('The visual guide...')}
                    </p>
                </div>
            </div>
        </section>
    )
}
