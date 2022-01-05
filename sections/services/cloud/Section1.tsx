import Col from '../../../components/Col'

export default function Section1() {
    return (
        <section>
            <div className="max-w-7xl w-full mx-auto py-24">
                <h2 className="text-3xl font-sofia-semibold text-secondary mb-16">
                    Fases de desarrollo
                </h2>
                <Col cols="6">
                    <Fases
                        count={1}
                        src="/images/services/3ds.png"
                        description="Diagnóstico inicial"
                    />
                    <Fases
                        count={2}
                        src="/images/services/blueprint.png"
                        description="Diseño de la solución"
                    />
                    <Fases
                        count={3}
                        src="/images/services/3d-display.png"
                        description="Desarrollo del software"
                    />
                    <Fases
                        count={4}
                        src="/images/services/cloud.png"
                        description="Desarrollo de la infraestructura"
                    />
                    <Fases
                        count={5}
                        src="/images/services/3d-design.png"
                        description="Integración de la solución"
                    />
                    <Fases
                        count={6}
                        src="/images/services/rotation.png"
                        description="Mantenimiento continuo"
                    />
                </Col>
            </div>
        </section>
    )
}

function Fases({ count, src, description }: FasesProps) {
    return (
        <div className="text-center">
            <h4 className="text-accent-alt font-sofia-bold text-2xl mb-4">
                {count}
            </h4>
            <div className="mx-auto mb-3 w-36 h-36 border-2 border-dashed border-accent-alt flex justify-center items-center rounded-full">
                <img src={src} alt="3ds" />
            </div>
            <p className="text-secondary font-sofia-bold w-32 text-center mx-auto">
                {description}
            </p>
        </div>
    )
}

interface FasesProps {
    count: number
    src: string
    description: string
}
