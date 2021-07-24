import { useTranslation } from 'react-i18next'
import Icon from '../../components/Icon'
import classnames from 'classnames'

interface ArrowProps {
    className?: string
    right?: boolean
    onClick: () => void
}

function Content({ src, title, subtitle }) {
    return (
        <div>
            <img className="bg-cover xl:w-full" src={src}></img>
            <div className="text-right">
                <p className="font-sofia-bold text-4xl mt-8">{title}</p>
                <p className="font-sofia font-light text-base mt-9 mb-12">
                    {subtitle}
                </p>
            </div>
        </div>
    )
}

function Arrow({ className = '', right = false, onClick }: ArrowProps) {
    return (
        <div
            style={right ? { right: '5%' } : { left: '5%' }}
            className={classnames(
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
                    <div className="w-full carousel">
                        <div id="item1" className="w-full carousel-item">
                            <Content
                                src="/img/erp.png"
                                title="Advance ERP"
                                subtitle="Soluciones grandes requieren manejos grandes"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Arrow
                            className="mr-5"
                            right={false}
                            onClick={() => {
                                return null
                            }}
                        />
                        <Arrow
                            right
                            onClick={() => {
                                return null
                            }}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}
