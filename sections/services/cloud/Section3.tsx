export default function Section3() {
    return (
        <section>
            <div className="max-w-7xl w-full mx-auto py-24 flex px-8 xl:px-0 flex-wrap sm:flex-nowrap text-center sm:text-left">
                <div className="w-full sm:w-1/2">
                    <h2 className="text-3xl font-sofia-semibold text-secondary mb-10">
                        Automatización
                    </h2>
                    <p className="max-w-xl text-subtle font-overpass-light">
                        En Bitzone tenemos la experiencia utilizando plataformas
                        de automatización como Gitlab DevOps, Github Actions y
                        Bamboo. Estas plataformas nos facilitan el despliegue a
                        través de pipelines. Aplicamos e incorporamos la
                        automatización a los siguientes elementos:
                    </p>
                    <ul className="max-w-lg text-subtle font-overpass-light list-disc list-inside mb-8 sm:mb-0">
                        <li className="my-4">
                            La creación de infraestructura en la nube
                        </li>
                        <li className="my-4">
                            La aplicación de la metodología DevOps
                        </li>
                        <li className="my-4">
                            Pruebas y supervisión o alertas
                        </li>
                    </ul>
                </div>
                <div className="w-full sm:w-1/2">
                    <img
                        src="/images/services/automatization.png"
                        alt="automatization"
                        className="mx-auto"
                    />
                </div>
            </div>
        </section>
    )
}
