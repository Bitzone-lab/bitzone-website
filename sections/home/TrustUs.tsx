import { useTranslation } from 'react-i18next'

export default function TrustUs() {
    const { t } = useTranslation()
    return (
        <section className="px-4 pb-16 xl:pt-16">
            <div className="grid grid-rows-2 xl:max-w-5xl xl:w-full xl:mx-auto xl:flex xl:gap-36">
                <div className="grid grid-cols-3 gap-x-5 gap-y-5 mb-5 mt-6 xl:max-w-lg xl:w-full xl:gap-x-8">
                    <div className="wrapper-contact">
                        <img
                            className="object-cover"
                            width="80px"
                            height="29px"
                            src="img/advance-logo.png"
                        />
                    </div>
                    <div className="wrapper-contact mt-6">
                        <img
                            className="object-cover"
                            width="80px"
                            height="29px"
                            src="img/advance-logo.png"
                        />
                    </div>
                    <div className="wrapper-contact">
                        <img
                            className="object-cover"
                            width="80px"
                            height="29px"
                            src="img/inokuos-logo.png"
                        />
                    </div>
                    <div className="wrapper-contact">
                        <img
                            className="object-cover"
                            width="80px"
                            height="29px"
                            src="img/inversiones-laCruz-logo.png"
                        />
                    </div>
                    <div className="wrapper-contact mt-5">
                        <img
                            className="object-cover"
                            width="80px"
                            height="29px"
                            src="img/mtr-advance-logo.png"
                        />
                    </div>
                    <div className="wrapper-contact">
                        <img
                            className="object-cover"
                            width="80px"
                            height="29px"
                            src="img/mtr-advance-logo.png"
                        />
                    </div>
                </div>
                <div className="mb-14 pt-4 xl:w-1/2 xl:pt-20">
                    <p className="text-tagline font-bold text-sm mb-5">
                        {t('TRUST US')}
                    </p>
                    <h2 className="text-subtle font-bold font-sofia text-4xl mb-10">
                        {t('We build the future of Peru and the world')}
                    </h2>
                    <p className="text-normal text-base font-light font-sans">
                        {t('We have experience carrying out projects...')}
                    </p>
                </div>
            </div>
        </section>
    )
}
