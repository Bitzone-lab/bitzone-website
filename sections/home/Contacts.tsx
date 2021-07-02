import { useTranslation } from 'react-i18next'

export default function Contacts() {
    const { t } = useTranslation()
    return (
        <section>
            <div className="grid grid-rows-2 p-4 xl:max-w-5xl xl:w-full xl:mx-auto">
                <div className="grid grid-cols-3 gap-x-5 gap-y-5 mb-5 mt-6">
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
                <div className="mb-14 pt-4">
                    <p className="text-tagline font-bold text-sm mb-5">
                        {t('TRUST US')}
                    </p>
                    <h2 className="text-subtle font-bold font-sofia text-4xl mb-10">
                        {t('We build the future of Peru and the world')}
                    </h2>
                    <p className="text-normal text-xl">
                        {t('We have experience carrying out projects...')}
                    </p>
                </div>
            </div>
        </section>
    )
}
