import { useTranslation } from 'react-i18next'

import useIntervalCarousel from '../../hooks/useIntervalCarousel'
import CarouselContentHalf from './CarouselContentHalf'
import { ContentHalfItem } from './CarouselHalfItem'
import content from '../../todo/carousel_project.json'

import Icon from '../../components/Icon'
import classNames from 'classnames'

interface ArrowProps {
    className?: string
    right?: boolean
    onClick: () => void
}

function Arrow({ className = '', right = false, onClick }: ArrowProps) {
    return (
        <div
            style={right ? { right: '5%' } : { left: '5%' }}
            className={classNames(
                'w-10 rounded-full bg-white h-10 top-1/2 items-center justify-center cursor-pointer hidden xl:flex',
                className
            )}
            onClick={onClick}
        >
            <Icon
                name={right ? 'right' : 'left'}
                color="#7F52DD"
                size={15}
                className={right ? 'ml-1' : 'mr-1'}
            />
        </div>
    )
}

export default function Header() {
    const { t } = useTranslation()
    const { index, toLeft, toRight } = useIntervalCarousel(2, 10000)
    return (
        <header className="px-4 bg-linear-primary text-white xl:px-0 xl:bg-header-projects-mobile">
            <div className="text-neutral-content  xl:w-full xl:mx-auto xl:flex ">
                <div className="w-11/12 pt-28 pb-10 xl:w-1/2 xl:pt-40 flex xl:pr-24 justify-end xl:pb-28">
                    <div className="flex flex-col xl:max-w-sm justify-center h-full">
                        <p className="mb-8 font-sans text-sm uppercase xl:mb-12">
                            {t('Our projects...')}
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
                <div className="hidden relative xl:block xl:w-1/2">
                    <CarouselContentHalf
                        index={index}
                        className="full-screen--36"
                    >
                        {content.map((data, i) => (
                            <ContentHalfItem key={i} {...data} />
                        ))}
                    </CarouselContentHalf>
                    <div className="absolute pb-10 pl-52 left-52 bottom-10 z-10 ">
                        <div className="flex items-center xl:w-full xl:max-w-5xl xl:mx-auto xl:justify-center">
                            <div className="max-w-5xl w-full mx-auto mt-8 xl:mt-14 xl:flex justify-between">
                                <Arrow
                                    className="mr-5"
                                    right={false}
                                    onClick={toLeft}
                                />
                                <Arrow right onClick={toRight} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
