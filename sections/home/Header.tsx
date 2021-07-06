import { useTranslation } from 'react-i18next'
import Icon from '../../components/Icon'
import classnames from 'classnames'

interface PropAnchor {
    className: string
    t: (key: string) => string
}

function Anchor({ className = '', t }: PropAnchor) {
    return (
        <div className={classnames('flex items-center text-accent', className)}>
            <a className="text-xl font-bold font-sofia" href="#">
                {t('Find out how')}
            </a>
            <Icon
                className="ml-2 mt-1"
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
        <header className="hero min-h-screen bg-linear-primary text-white xl:pt-60 xl:pb-48">
            <div className="hero-content text-neutral-content pb-24 xl:pb-0 xl:pt-20">
                <div className="max-w-md xl:max-w-screen-lg xl:flex xl:justify-between">
                    <div className="mb-5 xl:max-w-sm">
                        <h1 className="text-5xl font-bold font-sofia leading-tight xl:pt-3">
                            {t('Build your future with Bitzone')}
                        </h1>
                        <Anchor t={t} className="hidden xl:flex mt-8" />
                    </div>
                    <p className="mb-10 text-2xl xl:hidden">
                        {t(
                            'At Bitzone we have the professionals to build your future'
                        )}
                    </p>
                    <div>
                        <img
                            src="img/bits.png"
                            alt=""
                            className="hidden -mb-80 transform -translate-y-80 xl:block"
                        />
                        <p className="mb-10 text-2xl hidden xl:block xl:max-w-sm xl:mt-7">
                            {t('Take your business to the next level with...')}
                        </p>
                    </div>
                    <Anchor t={t} className="xl:hidden" />
                </div>
            </div>
        </header>
    )
}
