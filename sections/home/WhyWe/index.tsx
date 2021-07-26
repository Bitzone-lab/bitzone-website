import { useTranslation } from 'react-i18next'
import WrapperImage from './WrapperImage'
import Content from './Content'
import MobileCarousel from './MobileCarousel'
import useIntervalCarousel from '../../../hooks/useIntervalCarousel'

export default function WhyWe() {
    const { t } = useTranslation()
    const { index, setIndex } = useIntervalCarousel(5, 10000)

    return (
        <section>
            <div className="py-16 xl:max-w-5xl xl:w-full xl:mx-auto xl:flex xl:gap-36">
                <div
                    className="hidden bg-why-whe xl:flex xl:items-center xl:justify-center flex-col xl:max-w-lg xl:w-full h-auto"
                    style={{ height: '450px' }}
                >
                    <div className="flex justify-between">
                        <WrapperImage
                            src="img/section_why_we_1.svg"
                            active={index === 0}
                            onClick={() => setIndex(0)}
                        />
                        <WrapperImage
                            src="img/section_why_we_2.svg"
                            active={index === 1}
                            onClick={() => setIndex(1)}
                        />
                        <WrapperImage
                            src="img/section_why_we_3.svg"
                            active={index === 2}
                            onClick={() => setIndex(2)}
                        />
                    </div>
                    <div className="flex justify-between">
                        <WrapperImage
                            src="img/section_why_we_4.svg"
                            active={index === 3}
                            onClick={() => setIndex(3)}
                        />
                        <WrapperImage
                            src="img/section_why_we_5.svg"
                            active={index === 4}
                            onClick={() => setIndex(4)}
                        />
                        <WrapperImage
                            src="img/section_why_we_6.svg"
                            active={index === 5}
                            onClick={() => setIndex(5)}
                        />
                    </div>
                </div>
                <article className="hidden xl:w-1/2 px-4 xl:px-0 xl:block">
                    <h2 className="text-tagline font-sofia text-md mb-6 xl:mb-11 xl:mt-24">
                        {t('WHY WE?')}
                    </h2>
                    <Content t={t} index={index} />
                </article>
                <MobileCarousel />
            </div>
        </section>
    )
}
