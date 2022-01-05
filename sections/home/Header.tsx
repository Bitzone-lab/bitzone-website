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
            <div className="hero-content text-neutral-content xl:h-full xl:max-w-7xl xl:w-full xl:p-0">
                <div className="max-w-md xl:max-w-full flex items-center xl:w-full xl:flex xl:justify-between xl:h-full">
                    <div className="pb-24 xl:pb-0">
                        <h1 className="text-6xl font-sofia-semibold leading-tight">
                            {t('Build your future with Bitzone')}
                        </h1>
                        <p className="text-2xl font-sofia-light hidden xl:block xl:max-w-lg xl:mt-7">
                            {t('Take your business to the next level with...')}
                        </p>
                        <p className="text-2xl xl:hidden mt-6 font-sofia-light">
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
