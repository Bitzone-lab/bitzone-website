import { useTranslation } from 'react-i18next'

export default function Section3() {
    const { t } = useTranslation()

    return (
        <section>
            <div className="max-w-7xl w-full mx-auto py-24 flex px-8 xl:px-0 flex-wrap sm:flex-nowrap text-center sm:text-left">
                <div className="w-full sm:w-1/2">
                    <h2 className="text-3xl font-sofia-semibold text-secondary mb-10">
                        {t('Automation')}
                    </h2>
                    <p className="max-w-xl text-subtle font-overpass-light">
                        {t('At Bitzone we have the experience...')}
                    </p>
                    <ul className="max-w-lg text-subtle font-overpass-light list-disc list-inside mb-8 sm:mb-0">
                        <li className="my-4">
                            {t('The creation of infrastructure in the cloud')}
                        </li>
                        <li className="my-4">
                            {t('The application of the DevOps methodology')}
                        </li>
                        <li className="my-4">
                            {t('Testing and monitoring or alerts')}
                        </li>
                    </ul>
                </div>
                <div className="w-full sm:w-1/2">
                    <img
                        src="/images/services/automatization.png"
                        alt="automatization"
                        className="mx-auto"
                    />
                </div>
            </div>
        </section>
    )
}
