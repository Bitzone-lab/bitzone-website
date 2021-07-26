import { useTranslation } from 'react-i18next'
import Icon from '../../components/Icon'
import classnames from 'classnames'
import { useRouter } from 'next/router'

interface PropsAnchor {
    className: string
    t: (key: string) => string
}

function Anchor({ className = '', t }: PropsAnchor) {
    const { push } = useRouter()
    function handleClick(ev) {
        ev.preventDefault()
        push('/services')
    }
    return (
        <div
            onClick={handleClick}
            className={classnames('flex items-center text-accent', className)}
        >
            <a className="text-xl font-overpass-bold" href="#">
                {t('Find out how')}
            </a>
            <Icon
                className="ml-2"
                name="arrow-right"
                size={15}
                color="#EDE04B"
            />
        </div>
    )
}

export default function Header() {
    const { t } = useTranslation()
    return (
        <header className="hero min-h-screen bg-linear-primary text-white">
            <div className="hero-content text-neutral-content xl:w-screen xl:h-full ">
                <div className="max-w-md xl:max-w-full flex items-center xl:w-full xl:flex xl:justify-between xl:h-full">
                    <div className="xl:w-3/6 pb-24 xl:pb-0">
                        <h1 className="text-5xl font-sofia-semibold leading-tight">
                            {t('Build your future with Bitzone')}
                        </h1>
                        <p className="text-2xl font-sofia-light hidden xl:block xl:max-w-sm xl:mt-7">
                            {t('Take your business to the next level with...')}
                        </p>
                        <p className="text-2xl xl:hidden mt-6 font-sofia-light">
                            {t(
                                'At Bitzone we have the professionals to build your future'
                            )}
                        </p>
                        <Anchor t={t} className="mt-8" />
                    </div>
                    <div className="px-6 py-2 hidden xl:block xl:w-3/6">
                        <img
                            className="w-full h-full"
                            src="img/home-hero.svg"
                            alt="hero"
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}
