import Button from '../../components/Button'

export default function CallToContact() {
    return (
        <section className="p-4 bg-call-to-contact bg-cover">
            <h3 className="text-white font-bold font-sofia text-2xl mb-4 mt-4">
                ¿Quieres hacer tu proyecto realidad?{' '}
            </h3>
            <p className="text-white font-light text-base mb-16 font-sans">
                Contáctanos para ponernos manos a la obra.
            </p>
            <Button className="w-full mb-8">Contáctanos</Button>
        </section>
    )
}
