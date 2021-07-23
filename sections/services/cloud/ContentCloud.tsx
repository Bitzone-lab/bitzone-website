import { useTranslation } from 'react-i18next'

export default function ContentCloud() {
    const { t } = useTranslation()
    return (
        <section className="bg-white">
            <div className="xl:max-w-5xl xl:w-full xl:mx-auto">
                <div className="p-4 xl:flex xl:pt-32 xl:justify-between xl:pl-0 xl:pr-0">
                    <div className="flex justify-center mb-6 mt-4 px-4 xl:order-2">
                        <img
                            src="/img/infraestructure.svg"
                            className="xl:w-96"
                        />
                    </div>
                    <div className="xl:max-w-md xl:order-1">
                        <h2 className="font-sofia-bold font-bold text-3xl text-subtle mb-6">
                            Infraestructura
                        </h2>
                        <p className="text-base font-light text-normal mb-7">
                            {t('A device that enables collaboration...')}
                        </p>
                        <ul className="pl-4 text-subtle font-sans font-light text-base">
                            <li className="list-disc mb-4">
                                {t('The range of functions...')}
                            </li>
                            <li className="list-disc mb-4">
                                {t('The skeleton plan of a website...')}
                            </li>
                            <li className="list-disc mb-4">
                                {t('The relative priorities...')}
                            </li>
                            <li className="list-disc mb-4">
                                {t('The effect of different...')}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="p-4 xl:flex xl:pt-32 xl:pb-32 xl:justify-between xl:pl-0 xl:pr-0">
                    <div className="flex justify-center mb-6 mt-4 px-42">
                        <img src="/img/automation.svg" className="xl:w-96" />
                    </div>
                    <div className="xl:max-w-md xl:w-full">
                        <h2 className="font-sofia-bold font-bold text-3xl text-subtle mb-6">
                            Automatización
                        </h2>
                        <p className="text-base font-light text-normal mb-7">
                            {t('By creating')}
                        </p>
                        <ul className="pl-4 text-subtle font-sans font-light text-base">
                            <li className="list-disc mb-4">
                                {t('The range of functions...')}
                            </li>
                            <li className="list-disc mb-4">
                                {t('The skeleton plan of a website...')}
                            </li>
                            <li className="list-disc mb-4">
                                {t('The relative priorities...')}
                            </li>
                            <li className="list-disc mb-4">
                                {t('The effect of different...')}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
