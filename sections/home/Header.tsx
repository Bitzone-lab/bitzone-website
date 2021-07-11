import { useTranslation } from 'react-i18next'
import Icon from '../../components/Icon'
import classnames from 'classnames'
import { useRouter } from 'next/router'

interface PropAnchor {
    className: string
    t: (key: string) => string
}

function Anchor({ className = '', t }: PropAnchor) {
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
            <div className="hero-content text-neutral-content pb-24 xl:pb-0">
                <div className="max-w-md xl:max-w-screen-lg xl:flex xl:justify-between">
                    <div className="xl:max-w-md">
                        <h1 className="text-5xl font-sofia-semibold leading-tight">
                            {t('Build your future with Bitzone')}
                        </h1>
                        <p className="text-2xl hidden xl:block xl:max-w-sm xl:mt-7">
                            {t('Take your business to the next level with...')}
                        </p>
                        <p className="text-2xl xl:hidden mt-7">
                            {t(
                                'At Bitzone we have the professionals to build your future'
                            )}
                        </p>
                        <Anchor t={t} className="mt-8" />
                    </div>
                    <div className="px-12">
                        <img
                            src="img/bits.png"
                            alt=""
                            className="hidden transform xl:block"
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}
