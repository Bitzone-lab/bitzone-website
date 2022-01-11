import Button from '../../components/Button'

export default function Section2() {
    return (
        <section>
            <div className="w-full mx-auto py-20 max-w-7xl flex items-center flex-wrap lg:flex-nowrap">
                <div className="w-full px-10 lg:w-1/2 xl:pl-0 lg:pr-32">
                    <h3 className="text-accent font-sofia uppercase mb-4">
                        ¿qué ofrecemos?
                    </h3>
                    <h2 className="text-4xl font-sofia-bold max-w-md text-primary">
                        Desarrollamos{' '}
                        <span className="text-accent font-sofia-bold">
                            tecnologías innovadoras
                        </span>{' '}
                        para el Perú y del mundo
                    </h2>
                    <p className="mt-12 mb-16 pr-0 lg:pr-4 xl:pr-20">
                        Contamos con experiencia en realizar proyectos de
                        tecnologías innovadoras que están automatizando las
                        cosas de forma inteligente para clientes peruanos y
                        extranjeros. No importa cuan grande o pequeño sea tu
                        negocio, te podemos ofrecer una solución de alta
                        tecnología de calidad.
                    </p>
                    <div className="text-center">
                        <Button className="mb-6">
                            Descubre nuestros proyectos
                        </Button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <img src="/images/vsc.jpg" alt="vsc" className="mx-auto" />
                </div>
            </div>
        </section>
    )
}
