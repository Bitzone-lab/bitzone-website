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
                        <p className="text-base font-light text-normal mb-5">
                            {t('The cloud or Cloud today...')}
                        </p>
                        <p className="text-base font-light text-normal">
                            {t('We use AWS services such as...')}
                        </p>
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
                        <p className="text-base font-light text-normal">
                            {t('At Bitzone we have the experience...')}
                        </p>
                        <ul className="mt-4 pl-4 text-subtle font-sans font-light text-base">
                            <li className="list-disc mb-4">
                                {t('Building infrastructure in the...')}
                            </li>
                            <li className="list-disc mb-4">
                                {t('The application of the Devops...')}
                            </li>
                            <li className="list-disc">
                                {t('Testing and monitoring or...')}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
