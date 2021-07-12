import Button from '../../components/Button'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

export default function CallToContact() {
    const { t } = useTranslation()
    const router = useRouter()
    return (
        <section className="p-4 bg-call-to-contact-project bg-center bg-cover">
            <div>
                <div>
                    <h3 className="text-white font-bold font-sofia text-3xl mb-5 mt-12">
                        {t('Did you find it cool?')}{' '}
                    </h3>
                    <p className="text-white font-light text-base mb-10 font-sans">
                        {t("Let's establish contact and...")}
                    </p>
                </div>
                <Button
                    className="mb-14"
                    onClick={() => router.push('/contacts')}
                >
                    {t('Contact')}
                </Button>
            </div>
        </section>
    )
}
