import { useTranslation } from 'react-i18next'
import Carousel from '../../../components/CarouselLabel'
import Anchor from '../../../components/CarouselLabel/Anchor'
import CarouselContent from '../../../components/CarouselLabel/CarouselContent'
import CarouselItem from '../../../components/CarouselLabel/CarouselItem'
import useIntervalCarousel from '../../../hooks/useIntervalCarousel'
import content from '../../../todo/carousel_project_content.json'

export default function Projects() {
    const { t } = useTranslation()
    const { index, setIndex, toLeft, toRight } = useIntervalCarousel(1, 10000)

    return (
        <section>
            <div className="py-4 pl-4 xl:pl-0">
                <h2 className="px-4 text-subtle font-sofia-bold text-3xl mb-6 xl:text-4xl text-center">
                    {t('Our projects...')}
                </h2>
                <Carousel onLeft={toLeft} onRight={toRight}>
                    <CarouselContent index={index} title={t('Our projects')}>
                        {content.map((data, i) => (
                            <CarouselItem key={i} {...data} />
                        ))}
                    </CarouselContent>
                </Carousel>
                <Anchor
                    size={4}
                    onClickAnchor={i => setIndex(i)}
                    index={index}
                />
            </div>
        </section>
    )
}
