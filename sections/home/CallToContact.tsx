import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import Button from '../../components/Button'

export default function CallToContact() {
    const router = useRouter()
    const { t } = useTranslation()

    return (
        <section className="px-4 py-16 bg-call-to-contact bg-cover">
            <div className="max-w-5xl mx-auto xl:flex xl:justify-center xl:items-center">
                <div className="xl:mr-40">
                    <h3 className="text-white font-sofia-bold text-2xl mb-4 xl:hidden">
                        {t('Do you want to make...')}{' '}
                    </h3>
                    <h3 className="text-white font-sofia-bold text-3xl mb-4 mt-4 hidden xl:block">
                        {t('Shall we start to build your future?')}{' '}
                    </h3>
                    <p className="text-white font-overpass-light text-base">
                        {t('Contact us to...')}
                    </p>
                </div>
                <Button
                    className="w-full xl:w-auto xl:py-2 xl:px-5"
                    onClick={() => router.push('/contacts')}
                >
                    {t('Contact us')}
                </Button>
            </div>
        </section>
    )
}
