import { useTranslation } from 'react-i18next'

import useIntervalCarousel from '../../hooks/useIntervalCarousel'
import CarouselContentHalf from './CarouselContentHalf'
import { ContentHalfItem } from './CarouselHalfItem'
import content from '../../todo/carousel_project.json'

export default function Header() {
    const { t } = useTranslation()
    const { index, toLeft, toRight } = useIntervalCarousel(2, 10000)
    return (
        <header className="px-4 bg-linear-primary text-white xl:px-0 xl:bg-header-projects-mobile">
            <div className="text-neutral-content  xl:w-full xl:mx-auto xl:flex ">
                <div className="w-11/12 pt-28 pb-10 xl:w-1/2 xl:pt-40 flex justify-end xl:pb-28">
                    <div className="flex flex-col xl:max-w-lg justify-center h-full">
                        <p className="mb-8 font-sans font-bold text-sm uppercase xl:mb-12">
                            {t('Our projects')}
                        </p>
                        <div className="mb-5 xl:mb-24">
                            <h1 className="text-2xl font-sofia-bold xl:text-4xl">
                                {t('We improve the world with technology...')}
                            </h1>
                        </div>
                        <p className="mb-7 font-sans font-light text-base xl:text-2xl">
                            {t("Check out the projects we've done...")}
                        </p>
                    </div>
                </div>
                <div className="hidden xl:block xl:w-1/2">
                    <CarouselContentHalf
                        index={index}
                        className="full-screen--36"
                    >
                        {content.map((data, i) => (
                            <ContentHalfItem
                                key={i}
                                {...data}
                                onLeft={toLeft}
                                onRight={toRight}
                            />
                        ))}
                    </CarouselContentHalf>
                </div>
            </div>
        </header>
    )
}
