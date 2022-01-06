export default function Section2() {
    return (
        <section className="bg-base-100">
            <div className="max-w-7xl w-full mx-auto py-40 flex items-center">
                <div className="w-1/2 flex justify-around pr-16">
                    <img src="/images/services/mobile.png" alt="red-cloud" />
                    <img src="/images/services/pc.png" alt="red-cloud" />
                </div>
                <div className="w-1/2 pl-16">
                    <h2 className="text-3xl font-sofia-semibold text-secondary mb-10">
                        Tipos de desarrollo
                    </h2>
                    <p className="max-w-sm text-subtle font-overpass-light">
                        Ofrecemos los siguientes tipos de desarrollo de
                        productos digitales:
                    </p>
                    <ul className="list-disc list-inside mt-12 text-subtle">
                        <li className="mb-6">Aplicaciones móvil</li>
                        <li>Sitios web</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
