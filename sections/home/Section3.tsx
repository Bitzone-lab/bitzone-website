import { useTranslation } from 'react-i18next'

export default function Section3() {
    const { t } = useTranslation()

    return (
        <section>
            <div className="w-full mx-auto pt-16 pb-40 max-w-7xl text-center">
                <h2 className="text-4xl font-sofia-bold mx-auto max-w-md text-primary">
                    {t('They trust the-')}{' '}
                    <span className="font-sofia-bold text-accent">
                        {t('-quality-')}
                    </span>{' '}
                    {t('-of our work')}
                </h2>
                <p className="mt-12 mb-20 px-10 lg:px-0">
                    {t('Several Peruvian and foreign...')}
                </p>
                <div className="flex justify-between items-center gap-12 flex-wrap px-10">
                    <img
                        src="/images/home-section3/inversiones_la_cruz.png"
                        alt="inversiones_la_cruz"
                        className="mx-auto w-full"
                        style={{ maxWidth: '298px' }}
                    />
                    <img
                        src="/images/home-section3/advance.png"
                        alt="advance"
                        className="mx-auto w-full"
                        style={{ maxWidth: '131px' }}
                    />
                    <img
                        src="/images/home-section3/senati.svg"
                        alt="senati"
                        className="mx-auto w-full"
                        style={{ maxWidth: '142px' }}
                    />
                    <img
                        src="/images/home-section3/inmotus.png"
                        alt="inmotus"
                        className="mx-auto w-full"
                        style={{ maxWidth: '219px' }}
                    />
                    <img
                        src="/images/home-section3/procustodia.png"
                        alt="procustodia"
                        className="mx-auto w-full"
                        style={{ maxWidth: '197px' }}
                    />
                </div>
            </div>
        </section>
    )
}
