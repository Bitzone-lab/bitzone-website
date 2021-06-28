import { useTranslation } from 'react-i18next'
import Icon from '../../components/Icon'

export default function Header() {
    const { t } = useTranslation()
    return (
        <header className="hero min-h-screen bg-linear-primary text-white">
            <div className="hero-content text-neutral-content pb-40">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold font-sofia leading-tight">
                        {t('Build your future with Bitzone')}
                    </h1>
                    <p className="mb-10 text-2xl">
                        {t(
                            'At Bitzone we have the professionals to build your future'
                        )}
                    </p>
                    <div className="flex items-center text-accent">
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
                </div>
            </div>
        </header>
    )
}
