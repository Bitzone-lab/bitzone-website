export default function Section2() {
    return (
        <section>
            <div className="max-w-7xl w-full mx-auto py-24 flex items-center px-8 xl:px-0 flex-wrap sm:flex-nowrap text-center sm:text-left">
                <div className="w-full sm:w-1/2">
                    <h2 className="text-3xl font-sofia-semibold text-secondary mb-10">
                        Visión Artificial
                    </h2>
                    <p className="max-w-lg text-subtle font-overpass-light mx-auto sm:mx-0 mb-6 sm:mb-0">
                        ¿Necesitas analizar imágenes y procesarlas? Ofrecemos
                        varias herramientas de visión artificial utilizando IA
                        para obtener data de imágenes de forma sistemática. Esto
                        incluye guiado 2D/3D, lectura de códigos, y sistemas de
                        control de calidad.
                    </p>
                </div>
                <div className="w-full sm:w-1/2">
                    <img
                        src="/images/services/eye.png"
                        alt="eye"
                        className="mx-auto"
                    />
                </div>
            </div>
        </section>
    )
}