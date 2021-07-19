import { useRouter } from 'next/router'
import Button from '../../components/Button'

export default function CallToContact() {
    const router = useRouter()
    return (
        <section className="p-4">
            <div className="max-w-5xl mx-auto xl:flex xl:justify-center xl:items-center">
                <div className="xl:mr-40">
                    <h3 className="text-subtle font-sofia-bold text-2xl mb-4 mt-4">
                        ¿Te interesa una grata experiencia?
                    </h3>
                    <p className="text-normal mb-16">
                        Establezcamos contacto y de esa manera le podremos dar
                        una solución igual o mejor que las mostradas
                        anteriormente.
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
