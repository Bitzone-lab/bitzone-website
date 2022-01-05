import { useRouter } from 'next/router'
import Button from '../../../components/Button'

/**
 * @deprecated
 */
export default function CallToContact() {
    const router = useRouter()
    return (
        <section className="p-4 bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="xl:mr-40">
                    <h3 className="text-normal font-sofia-bold text-2xl mb-4 mt-4">
                        ¿Quieres hacer tu proyecto realidad?{' '}
                    </h3>
                    <p className="text-subtle text-base mb-14">
                        Establezcamos contacto y de esa manera le podremos dar
                        una solución igual o mejor que las mostradas
                        anteriormente.
                    </p>
                </div>
                <Button
                    className="w-full mb-3"
                    onClick={() => router.push('/contacts')}
                >
                    Contáctanos
                </Button>
            </div>
        </section>
    )
}
