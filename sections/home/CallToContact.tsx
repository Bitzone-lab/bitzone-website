import { useRouter } from 'next/router'
import Button from '../../components/Button'

export default function CallToContact() {
    const router = useRouter()
    return (
        <section className="p-4 bg-call-to-contact bg-cover">
            <div className="max-w-5xl mx-auto xl:flex xl:justify-center xl:items-center">
                <div className="xl:mr-40">
                    <h3 className="text-white font-sofia-bold text-2xl mb-4 mt-4">
                        ¿Quieres hacer tu proyecto realidad?{' '}
                    </h3>
                    <p className="text-white text-base mb-16">
                        Contáctanos para ponernos manos a la obra.
                    </p>
                </div>
                <Button
                    className="w-full mb-8 xl:w-auto xl:py-2 xl:px-5"
                    onClick={() => router.push('/contacts')}
                >
                    Contáctanos
                </Button>
            </div>
        </section>
    )
}
