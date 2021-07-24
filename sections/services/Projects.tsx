import { useTranslation } from 'react-i18next'
import Carousel from '../../components/CarouselLabel'
import Anchor from '../../components/CarouselLabel/Anchor'
import CarouselContent from '../../components/CarouselLabel/CarouselContent'
import CarouselItem from '../../components/CarouselLabel/CarouselItem'
import useIntervalCarousel from '../../hooks/useIntervalCarousel'
import content from '../../todo/carousel_project_content.json'

export interface PropsProjects {
    type?: string
}

export default function Projects({ type }) {
    const { t } = useTranslation()
    const { index, setIndex, toLeft, toRight } = useIntervalCarousel(1, 10000)

    return (
        <section>
            <div className="py-7 pl-4 xl:pl-0">
                <h2 className="px-4 text-subtle font-sofia-bold text-2xl mb-6 xl:text-3xl text-center">
                    {type === 'dev' && t('Our projects dev...')}
                    {type === 'ux/ui' && t('Our projects ux/ui...')}
                    {type === 'cloud' && t('Our projects cloud...')}
                </h2>
                <Carousel onLeft={toLeft} onRight={toRight}>
                    <CarouselContent index={index}>
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
