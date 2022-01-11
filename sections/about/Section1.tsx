import Col from '../../components/Col'

export default function Section1() {
    return (
        <section className="py-28">
            <div className="xl:max-w-7xl xl:w-full xl:mx-auto">
                <h2 className="font-sofia-bold text-3xl text-subtle text-center xl:text-4xl">
                    Nuestro conjunto de{' '}
                    <span className="text-accent font-sofia-bold">valores</span>
                </h2>
                <p className="text-subtle mt-12 text-center">
                    Es parte de nuestra visión fomentar estos valores en la
                    comunidad Bitzone.
                </p>
                <Col
                    cols="1"
                    className="mt-16 sm:grid-cols-2 lg:grid-cols-4 px-10 xl:px-0"
                    gap={12}
                    gapY={12}
                >
                    <Security
                        src="/images/about/leadership.png"
                        title="Excelencia"
                        description="Mejoramos constantemente para superar las expectativas"
                    />
                    <Security
                        src="/images/about/like.png"
                        title="Confianza"
                        description="Con nuestros clientes, la sociedad, nuestro equipo y nuestro entorno.

                        "
                    />
                    <Security
                        src="/images/about/adaptive.png"
                        title="Compromiso"
                        description="Esencial para el correcto desarrollo de las actividades que realizamos a diario."
                    />
                    <Security
                        src="/images/about/supporter.png"
                        title="Respeto"
                        description="Reconocemos en nuestro equipo a personas plenas y que merecen el reconocimiento de sus acciones en pro de la organización."
                    />
                </Col>
            </div>
        </section>
    )
}

function Security({ src, title, description }: SecurityProps) {
    return (
        <div className="text-center">
            <img src={src} alt={title} className="mx-auto mb-3" />
            <h3 className="font-sofia-semibold text-secondary text-lg mb-5">
                {title}
            </h3>
            <p
                className="text-center sm:text-left font-sofia-light text-subtle mx-auto"
                style={{
                    maxWidth: '250px'
                }}
            >
                {description}
            </p>
        </div>
    )
}

interface SecurityProps {
    src: string
    title: string
    description: string
}
