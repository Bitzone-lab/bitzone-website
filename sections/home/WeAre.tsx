import { useTranslation } from 'react-i18next'
import Carousel from '../../components/Carousel'
import Anchor from '../../components/Carousel/Anchor'
import CarouselContent from '../../components/Carousel/CarouselContent'
import CarouselItem from '../../components/Carousel/CarouselItem'
import useIntervalCarousel from '../../hooks/useIntervalCarousel'
import content from '../../todo/carousel_content.json'

export default function Component() {
    const { t } = useTranslation()
    const { index, setIndex, toLeft, toRight } = useIntervalCarousel(3, 7000)

    return (
        <section className="relative cut-top -mt-36">
            <Carousel onLeft={toLeft} onRight={toRight}>
                <CarouselContent
                    index={index}
                    className="full-screen--36"
                    title={t('We are team, we are Bitzone')}
                >
                    {content.map((data, i) => (
                        <CarouselItem key={i} {...data} />
                    ))}
                </CarouselContent>
                <Anchor
                    size={4}
                    onClickAnchor={i => setIndex(i)}
                    index={index}
                />
            </Carousel>
        </section>
    )
}
