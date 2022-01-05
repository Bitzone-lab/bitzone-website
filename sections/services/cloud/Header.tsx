export default function Header() {
    return (
        <header
            className="bg-cloud bg-cover flex items-center"
            style={{ height: '575px' }}
        >
            <div className="p-4 text-white text-center xl:max-w-7xl xl:w-full xl:mx-auto xl:text-left xl:pl-0">
                <h1 className="font-sofia-bold text-6xl xl:text-8xl mb-8">
                    CLOUD
                </h1>
                <p className="font-light font-sofia text-base mb-10 xl:font-normal xl:text-2xl">
                    Cloud computing
                </p>
                <p className="font-normal text-xl xl:max-w-3xl">
                    A través de nuestra infraestructura Cloud, resolvemos los
                    problemas de nuestros clientes proponiendo y diseñando una
                    infraestructura moderna para el almacenamiento,
                    mantenimiento y acceso de sus datos.
                </p>
            </div>
        </header>
    )
}
