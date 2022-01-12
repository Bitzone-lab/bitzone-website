import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import Button from '../../components/Button'

export default function Header() {
    const { t } = useTranslation()
    const { push } = useRouter()

    return (
        <header
            className="hero bg-header text-white bg-cover"
            style={{ height: '700px' }}
        >
            <div className="hero-content text-neutral-content lg:h-full lg:max-w-7xl lg:w-full px-8">
                <div className="max-w-md lg:max-w-full flex items-center lg:w-full lg:flex lg:justify-between lg:h-full">
                    <div className="pb-24 lg:pb-0">
                        <h1 className="text-4xl md:text-6xl font-sofia-semibold leading-tight">
                            {t('Build your future with Bitzone')}
                        </h1>
                        <p className="text-2xl font-sofia-light hidden lg:block lg:max-w-lg lg:mt-7">
                            {t('Take your business to the next level with...')}
                        </p>
                        <p className="text-2xl lg:hidden mt-6 font-sofia-light">
                            {t(
                                'At Bitzone we have the professionals to build your future'
                            )}
                        </p>
                        <Button
                            onClick={() => push('/services')}
                            className="mt-16 btn-sm"
                        >
                            {t('Find out how')}
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
