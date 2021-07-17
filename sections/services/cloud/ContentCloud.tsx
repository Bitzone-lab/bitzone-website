import { useTranslation } from 'react-i18next'

export default function ContentCloud() {
    const { t } = useTranslation()
    return (
        <section className="bg-white">
            <div className="p-4">
                <div className="flex justify-center mb-6 mt-4 px-4">
                    <img src="/img/infraestructure.svg" />
                </div>
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
                        t{t('The skeleton plan of a website...')}
                    </li>
                    <li className="list-disc mb-4">
                        {t('The relative priorities...')}
                    </li>
                    <li className="list-disc mb-4">
                        {t('The effect of different...')}
                    </li>
                </ul>
            </div>
            <div className="p-4">
                <div className="flex justify-center mb-6 mt-4 px-4">
                    <img src="/img/automation.svg" />
                </div>
                <h2 className="font-sofia-bold font-bold text-3xl text-subtle mb-6">
                    Automatización
                </h2>
                <p className="text-base font-light text-normal mb-7">
                    {t('A device that enables collaboration...')}
                </p>
                <ul className="pl-4 text-subtle font-sans font-light text-base">
                    <li className="list-disc mb-4">
                        {t('The range of functions...')}
                    </li>
                    <li className="list-disc mb-4">
                        t{t('The skeleton plan of a website...')}
                    </li>
                    <li className="list-disc mb-4">
                        {t('The relative priorities...')}
                    </li>
                    <li className="list-disc mb-4">
                        {t('The effect of different...')}
                    </li>
                </ul>
            </div>
        </section>
    )
}
