import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import Button from '../../components/Button'

export default function CallToContact() {
    const router = useRouter()
    const { t } = useTranslation()
    return (
        <section>
            <div className="p-10 xl:px-0 max-w-5xl mx-auto xl:flex xl:justify-center xl:items-center xl:pl-20 xl:pr-40">
                <div className="xl:mr-20">
                    <h3 className="text-subtle font-sofia-bold text-2xl xl:text-3xl mb-4 mt-4">
                        ¿Te interesa una grata experiencia?
                    </h3>
                    <p className="text-normal mb-16">
                        {t("Let's establish contact...")}
                    </p>
                </div>
                <Button
                    className="w-full xl:w-auto"
                    onClick={() => router.push('/contacts')}
                >
                    Contáctanos
                </Button>
            </div>
        </section>
    )
}
