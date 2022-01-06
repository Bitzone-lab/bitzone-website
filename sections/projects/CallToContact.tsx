import Button from '../../components/Button'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

/**
 * @deprecated
 */
export default function CallToContact() {
    const { t } = useTranslation()
    const router = useRouter()
    return (
        <section className="p-4 bg-call-to-contact-project bg-center bg-cover xl:p-0">
            <div className="xl:max-w-5xl xl:w-full xl:mx-auto">
                <div className="xl:flex xl:justify-end">
                    <div className="xl:flex-end xl:max-w-md xl:pt-24 xl:pb-12">
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
                </div>
            </div>
        </section>
    )
}
