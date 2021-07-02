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
        <section className="px-4 py-12">
            <div className="xl:max-w-5xl xl:w-full xl:mx-auto">
                <h2 className="text-tagline font-sofia text-lg mb-6">
                    {t('WHY WE?')}
                </h2>
                <h1 className="text-3xl font-sofia mb-3 text-subtle">
                    {t('We are constantly growing')}
                </h1>
                <p className="text-lg text-subtle">
                    {t('We work in an environment where the creativity...')}
                </p>
                <div className="carousel mt-4 mb-4">
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
                <div className="flex justify-center">
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
