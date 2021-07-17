import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
export default function Header() {
    const { t } = useTranslation()
    const router = useRouter()

    return (
        <header className="bg-linear-primary">
            <div className="text-white flex justify-center items-center pt-32 flex-col text-center mb-12 xl:pt-56 xl:mb-20">
                <div className="xl:max-w-xl xl:relative">
                    <p className="hidden font-light font-sans text-sm absolute -left-40 -top-16 xl:block">
                        {t('Our services')}
                    </p>
                    <h1 className="text-4xl mb-5 font-sofia-bold xl:text-8xl xl:mb-10">
                        {t('Always on the vanguard')}
                    </h1>
                    <p className="font-light font-sans text-base">
                        {t('Take a look at what...')}
                    </p>
                </div>
            </div>
            <div className="xl:flex">
                <div
                    className="bg-ux service-bg xl:w-1/3 xl:h-96"
                    onClick={() => router.push('/services/ux')}
                >
                    <div className="text-center">
                        <p className="title-service">UX</p>
                        <p className="subtitle-service">
                            {t('User experience')}
                        </p>
                    </div>
                </div>
                <div
                    className="bg-dev service-bg service-bg xl:w-1/3 xl:h-96"
                    onClick={() => router.push('/services/dev')}
                >
                    <div className="text-center">
                        <p className="title-service">DEV</p>
                        <p className="subtitle-service">
                            {t('Software development')}
                        </p>
                    </div>
                </div>
                <div
                    className="bg-cloud service-bg service-bg xl:w-1/3 xl:h-96"
                    onClick={() => router.push('/services/cloud')}
                >
                    <div className="text-center">
                        <p className="title-service">CLOUD</p>
                        <p className="subtitle-service">Cloud computing</p>
                    </div>
                </div>
            </div>
        </header>
    )
}
