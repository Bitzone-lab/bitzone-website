import { useTranslation } from 'react-i18next'

/**
 * @deprecated
 */
export default function ContentUx() {
    const { t } = useTranslation()
    return (
        <section className="bg-white pt-4">
            <div className="xl:max-w-5xl xl:m-auto xl:w-full ">
                <div className="xl:flex xl:pt-0 xl:justify-between xl:pr-0 xl:mr-0 xl:w-full">
                    <div className="flex justify-center mb-6 mt-6 xl:mt-0 pl-24 xl:order-2 xl:pt-9">
                        <img src="/img/devices.png" />
                    </div>
                    <div className="xl:max-w-md xl:my-auto xl:order-1 p-4 xl:py-4 xl:px-0">
                        <h2 className="font-sofia-bold font-bold text-4xl text-subtle mb-6">
                            {t('A unique experience')}
                        </h2>
                        <p className="text-base font-light text-left text-normal mb-7">
                            {t('UX / UI is not only what you see...')}
                        </p>
                        <div className="xl:flex xl:pt-2 xl:justify-between xl:pl-0 xl:pr-0">
                            <div className="xl:w-56 xl:pr-6">
                                <h2 className="font-sofia-bold font-bold text-xl text-subtle mb-1">
                                    {t('Consistent')}
                                </h2>
                                <p className="text-base font-light text-left text-normal mb-4">
                                    {t('Design metrics are taken into...')}
                                </p>
                            </div>
                            <div className="xl:w-56">
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
