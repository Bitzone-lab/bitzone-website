export default function Section1() {
    return (
        <section>
            <div className="max-w-7xl w-full mx-auto py-32 px-8 xl:px-0">
                <h2 className="text-3xl font-sofia-semibold text-secondary mb-16 text-center md:text-left">
                    Fases de desarrollo
                </h2>
                <div className="flex justify-between flex-col md:flex-row items-center">
                    <Fases
                        count={1}
                        src="/images/services/3ds.png"
                        description="Diagnóstico inicial"
                    />
                    <Arrow />
                    <Fases
                        count={2}
                        src="/images/services/blueprint.png"
                        description="Diseño de la solución"
                    />
                    <Arrow />
                    <Fases
                        count={3}
                        src="/images/services/3d-display.png"
                        description="Desarrollo del software"
                    />
                    <Arrow />
                    <Fases
                        count={5}
                        src="/images/services/3d-design.png"
                        description="Integración de la solución"
                    />
                    <Arrow />
                    <Fases
                        count={5}
                        src="/images/services/rotation.png"
                        description="Mantenimiento continuo"
                    />
                </div>
            </div>
        </section>
    )
}

function Fases({ count, src, description }: FasesProps) {
    return (
        <div className="text-center mb-10 md:mb-0">
            <h4 className="text-accent-alt font-sofia-bold text-2xl mb-4">
                {count}
            </h4>
            <div className="mx-auto mb-3 w-36 h-36 md:w-20 md:h-20 lg:w-36 lg:h-36 border-4 border-dashed border-accent-alt flex justify-center items-center rounded-full">
                <img
                    src={src}
                    alt="3ds"
                    className="w-auto h-auto md:w-10 md:h-10 lg:w-auto lg:h-auto"
                />
            </div>
            <p className="text-secondary font-sofia-bold w-32 text-center mx-auto">
                {description}
            </p>
        </div>
    )
}

function Arrow() {
    return (
        <img
            src="/images/services/arrow_downward.svg"
            alt="arrow_downward"
            className="w-6 hidden md:block lg:w-max"
        />
    )
}

interface FasesProps {
    count: number
    src: string
    description: string
}
