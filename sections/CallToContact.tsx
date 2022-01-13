import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import Button from '../components/Button'

export default function CallToContact({
    title,
    description
}: CallToContactProps) {
    const router = useRouter()
    const { t } = useTranslation()

    return (
        <section className="px-10 lg:px-4 py-16 bg-call-to-contact bg-cover">
            <div className="max-w-5xl mx-auto lg:flex lg:justify-center lg:items-center">
                <div className="lg:mr-40">
                    <h3 className="text-white font-sofia-bold text-2xl lg:text-3xl mb-4 mt-4">
                        {title}
                    </h3>
                    <p className="text-white font-overpass-light text-base">
                        {description}
                    </p>
                </div>
                <Button
                    className="w-full lg:w-auto lg:py-2 lg:px-5 mt-5 lg:mt-0"
                    onClick={() => router.push('/contacts')}
                >
                    {t('Contact us')}
                </Button>
            </div>
        </section>
    )
}

interface CallToContactProps {
    title: string
    description: string
}
