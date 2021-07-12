import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
export default function Header() {
    const { t } = useTranslation()
    const router = useRouter()

    return (
        <header className="bg-linear-primary">
            <div className="text-white flex justify-center items-center pt-32 flex-col text-center mb-12">
                <h1 className="font-bold text-4xl font-sofia mb-5">
                    {t('Always on the vanguard')}
                </h1>
                <p className="font-light text-base">
                    {t('Take a look at what...')}
                </p>
            </div>

            <div>
                <div
                    className="bg-ux service-bg"
                    onClick={() => router.push('/services/ux')}
                >
                    UX
                </div>
                <div
                    className="bg-dev service-bg"
                    onClick={() => router.push('/services/dev')}
                >
                    DEV
                </div>
                <div
                    className="bg-cloud service-bg"
                    onClick={() => router.push('/services/cloud')}
                >
                    CLOUD
                </div>
            </div>
        </header>
    )
}
