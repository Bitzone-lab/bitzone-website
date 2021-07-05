import { useTranslation } from 'react-i18next'
import Icon from '../../components/Icon'

function Direction({ children, className = '' }) {
    return (
        <div
            className={`bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md ${className}`}
        >
            {children}
        </div>
    )
}

export default function WhyWe() {
    const { t } = useTranslation()
    return (
        <section>
            <div className="px-4 py-16 xl:max-w-5xl xl:w-full xl:mx-auto xl:flex  xl:gap-36 xl:px-0">
                <div
                    className="hidden  bg-why-whe xl:grid xl:grid-cols-3 xl:gap-x-11 xl:gap-y-14  xl:px-12 xl:py-24 xl:max-w-xl xl:w-full h-auto"
                    style={{ height: '500px' }}
                >
                    <div className="wrapper-image-why-whe active-wrapper-image-why-whe">
                        <img src="img/section_why_we_1.svg" className="w-40" />
                    </div>
                    <div className="wrapper-image-why-whe">
                        <img src="img/section_why_we_2.svg" className="w-40" />
                    </div>
                    <div className="wrapper-image-why-whe">
                        <img src="img/section_why_we_3.svg" className="w-40" />
                    </div>
                    <div className="wrapper-image-why-whe rounded-sm">
                        <img src="img/section_why_we_4.svg" className="w-40" />
                    </div>
                    <div className="wrapper-image-why-whe">
                        <img src="img/section_why_we_5.svg" className="w-40" />
                    </div>
                    <div className="wrapper-image-why-whe">
                        <img src="img/section_why_we_6.svg" className="w-40" />
                    </div>
                </div>

                <div className="xl:w-1/2 xl:flex xl:flex-col xl:justify-end xl:mb-10">
                    <h2 className="text-tagline font-sofia text-lg mb-6 xl:mb-11">
                        {t('WHY WE?')}
                    </h2>
                    <h1 className="text-3xl font-sofia mb-3 text-subtle xl:mb-6">
                        {t('We are constantly growing')}
                    </h1>
                    <p className="text-base font-light text-subtle">
                        {t('We work in an environment where the creativity...')}
                    </p>
                </div>
                <div className="carousel mt-4 mb-4 xl:hidden">
                    <div className="bg-linear-primary carousel-item p-10">
                        <img src="img/section_why_we_1.svg" className="w-40" />
                    </div>
                    <div className="bg-linear-primary carousel-item p-10 opacity-50">
                        <img src="img/section_why_we_2.svg" className="w-40" />
                    </div>
                    <div className="bg-linear-primary carousel-item p-10 opacity-50">
                        <img src="img/section_why_we_3.svg" className="w-40" />
                    </div>
                    <div className="bg-linear-primary carousel-item p-10 opacity-50">
                        <img src="img/section_why_we_4.svg" className="w-40" />
                    </div>
                    <div className="bg-linear-primary carousel-item p-10 opacity-50">
                        <img src="img/section_why_we_5.svg" className="w-40" />
                    </div>
                    <div className="bg-linear-primary carousel-item p-10 opacity-50">
                        <img src="img/section_why_we_6.svg" className="w-40" />
                    </div>
                </div>
                <div className="flex justify-center xl:hidden">
                    <Direction className="mr-5">
                        <Icon name="left" color="#7F52DD" size={18} />
                    </Direction>
                    <Direction className="ml-5">
                        <Icon name="right" color="#7F52DD" size={18} />
                    </Direction>
                </div>
            </div>
        </section>
    )
}
