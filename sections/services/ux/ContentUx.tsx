import { useTranslation } from 'react-i18next'

export default function ContentUx() {
    const { t } = useTranslation()
    return (
        <section className="bg-white">
            <div className="xl:max-w-5xl xl:w-full xl:mx-auto">
                <div className="xl:flex xl:pt-32 xl:justify-between xl:pl-0 xl:pr-0">
                    <div className="flex justify-center mb-6 mt-6 pl-4 xl:order-2">
                        <img src="/img/devices.png" className="xl:w-96" />
                    </div>
                    <div className="xl:max-w-md xl:order-1 p-4">
                        <h2 className="font-sofia-bold font-bold text-3xl text-subtle mb-6">
                            {t('A consistent experience')}
                        </h2>
                        <p className="text-base font-light text-left text-normal mb-7">
                            {t('UX / UI is not only what you see...')}
                        </p>
                        <div className="xl:flex xl:pt-2 xl:justify-between xl:pl-0 xl:pr-0">
                            <div>
                                <h2 className="font-sofia-bold font-bold text-xl text-subtle mb-1">
                                    {t('Consistent')}
                                </h2>
                                <p className="text-base font-light text-left text-normal mb-4">
                                    {t('Design metrics are taken into...')}
                                </p>
                            </div>
                            <div>
                                <h2 className="font-sofia-bold font-bold text-xl text-subtle mb-1">
                                    {t('The most important thing is...')}
                                </h2>
                                <p className="text-base font-light text-left text-normal mb-4">
                                    {t('Human-center design is applied...')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
