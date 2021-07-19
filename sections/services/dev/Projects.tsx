import { useTranslation } from 'react-i18next'
import Carousel from '../../../components/CarouselLabel'
import Anchor from '../../../components/CarouselLabel/Anchor'
import CarouselContent from '../../../components/CarouselLabel/CarouselContent'
import CarouselItem from '../../../components/CarouselLabel/CarouselItem'
import useIntervalCarousel from '../../../hooks/useIntervalCarousel'
import content from '../../../todo/carousel_project_content.json'

export default function Projects() {
    const { t } = useTranslation()
    const { index, setIndex, toLeft, toRight } = useIntervalCarousel(0, 10000)

    return (
        <section>
            <div className="py-10 xl:max-w-5xl xl:w-full xl:mx-auto">
                <h2 className="p-4 text-subtle font-sofia-bold text-3xl mb-6 xl:text-4xl text-center">
                    {t('Our projects')}
                </h2>
                <Carousel onLeft={toLeft} onRight={toRight}>
                    <CarouselContent index={index} title={t('Our projects')}>
                        {content.map((data, i) => (
                            <CarouselItem key={i} {...data} />
                        ))}
                    </CarouselContent>
                </Carousel>
                <Anchor
                    size={3}
                    onClickAnchor={i => setIndex(i)}
                    index={index}
                />
            </div>
        </section>
    )
}
