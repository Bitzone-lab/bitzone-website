import { useTranslation } from 'react-i18next'

import useIntervalCarousel from '../../hooks/useIntervalCarousel'
import CarouselContentHalf from './CarouselContentHalf'
import { ContentHalfItem } from './CarouselHalfItem'

export default function Header() {
    const { t } = useTranslation()
    const { index, toLeft, toRight } = useIntervalCarousel(3, 10000)

    return (
        <header className="px-4 pt-28 bg-linear-primary text-white xl:px-0 xl:bg-header-projects-mobile">
            <div className="text-neutral-content pb-11 xl:max-w-5xl xl:w-full xl:mx-auto xl:flex xl:pb-28">
                <div className="w-10/12 xl:w-1/2 xl:pt-40">
                    <div className="flex flex-col justify-center h-full">
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
                        <ContentHalfItem
                            src="/img/erp.png"
                            title="Advance ERP"
                            subtitle="Soluciones grandes requieren manejos grandes"
                            onLeft={toLeft}
                            onRight={toRight}
                        />
                        <ContentHalfItem
                            src="/img/erp.png"
                            title="Advance ERP"
                            subtitle="Soluciones grandes requieren manejos grandes"
                            onLeft={toLeft}
                            onRight={toRight}
                        />
                        <ContentHalfItem
                            src="/img/erp.png"
                            title="Advance ERP"
                            subtitle="Soluciones grandes requieren manejos grandes"
                            onLeft={toLeft}
                            onRight={toRight}
                        />
                    </CarouselContentHalf>
                </div>
            </div>
        </header>
    )
}
