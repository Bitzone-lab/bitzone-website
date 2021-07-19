import { useTranslation } from 'react-i18next'

export default function WebDevelopment() {
    const { t } = useTranslation()
    return (
        <section className="py-10">
            <div className="grid grid-cols-1 xl:gap-36 xl:grid-cols-2">
                <div className="w-full flex justify-end items-center xl:order-2 pl-4 overflow-hidden">
                    <img
                        className="object-cover max-w-full max-h-64 -mr-24 xl:max-h-full xl:mr-0"
                        src="img/services-web-dev.png"
                    />
                </div>
                <div className="flex flex-col justify-center items-center px-4 mt-8 xl:px-0 xl:mt-0 ">
                    <div className="xl:w-1/2">
                        <h2 className="text-subtle font-sofia-bold text-3xl mb-8 xl:text-4xl">
                            {t('Web development')}
                        </h2>
                        <p className="text-normal text-base">
                            {t('By creating')}
                        </p>
                        <p className="text-normal text-base mt-4">
                            {t('The visual guide')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
