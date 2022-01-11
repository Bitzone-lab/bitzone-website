export default function Section2() {
    return (
        <section className="bg-base-100">
            <div className="max-w-7xl w-full mx-auto py-40 flex items-center flex-wrap md:flex-nowrap px-8 md:px-0">
                <div className="w-full md:w-1/2 flex justify-center md:justify-around md:pr-16 mb-10">
                    <img
                        className="hidden md:block"
                        src="/images/services/mobile.png"
                        alt="red-cloud"
                    />
                    <img
                        className=""
                        src="/images/services/pc.png"
                        alt="red-cloud"
                    />
                </div>
                <div className="w-full md:w-1/2 md:pl-16">
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
