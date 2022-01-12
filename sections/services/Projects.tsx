import { useTranslation } from 'react-i18next'
import Carousel from '../../components/CarouselLabel'
import CarouselContent from '../../components/CarouselLabel/CarouselContent'
import CarouselItem from '../../components/CarouselLabel/CarouselItem'
import useIntervalCarousel from '../../hooks/useIntervalCarousel'

/**
 * @deprecated
 */
export default function Projects({ titleSection, content }) {
    const { t } = useTranslation()
    const { index, setIndex, toLeft, toRight } = useIntervalCarousel(1, 10000)

    return (
        <section>
            <div className="py-10 pl-4 xl:pl-0">
                <h2 className="px-4 text-subtle font-sofia-bold text-2xl mb-20 xl:text-3xl text-center">
                    {t(titleSection)}
                </h2>
                <Carousel onLeft={toLeft} onRight={toRight}>
                    <CarouselContent index={index} title={t(titleSection)}>
                        {content.map((data, i) => (
                            <CarouselItem key={i} {...data} />
                        ))}
                    </CarouselContent>
                </Carousel>
                {/* <Anchor
                    size={4}
                    onClickAnchor={i => setIndex(i)}
                    index={index}
                /> */}
            </div>
        </section>
    )
}
