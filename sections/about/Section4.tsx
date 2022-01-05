/**
 * @deprecated
 */
export default function Section4() {
    return (
        <section className="bg-white mt-16 xl:mb-14">
            <h2 className="font-sofia-bold text-3xl text-subtle text-center">
                Nuestro propósito
            </h2>
            <p className="text-center mt-16 font-normal text-lg text-subtle mb-8">
                Transformar vidas a través de la tecnología
            </p>
            <div className="mb-8 xl:mb-20">
                <img className="w-full" src="./img/better-life.svg" alt="" />
            </div>
            <div className="px-4 xl:max-w-5xl xl:w-full xl:mx-auto xl:px-0 xl:flex xl:gap-7">
                <div className="xl:text-center">
                    <h3 className="font-sofia-bold text-lg text-subtle">
                        Dar oportunidades
                    </h3>
                    <p className="mt-3 mb-6 text-normal xl:mb-9">
                        El talento está en todas partes, nosotros lo buscamos
                    </p>
                    <div className="flex justify-center mb-12 xl:mb-0">
                        <img
                            className="w-36 xl:h-32 xl:w-auto"
                            src="./img/opportunity.svg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="xl:text-center">
                    <h3 className="font-sofia-bold text-lg text-subtle">
                        Potenciar el talento
                    </h3>
                    <p className="mt-3 mb-6 text-normal xl:mb-9">
                        No solo se trata de talento, sino de formarlo y
                        potenciarlo
                    </p>
                    <div className="flex justify-center mb-12 xl:mb-0">
                        <img
                            className="w-36 xl:h-32 xl:w-auto"
                            src="./img/power.svg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="xl:text-center">
                    <h3 className="font-sofia-bold text-lg text-subtle">
                        Construcción de un entorno
                    </h3>
                    <p className="mt-3 mb-6 text-normal xl:mb-9">
                        Trabajamos en un entorno agradable donde se fomenta la
                        creatividad
                    </p>
                    <div className="flex justify-center mb-12 xl:mb-0">
                        <img
                            className="w-36 xl:h-32 xl:w-auto"
                            src="./img/office.svg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="xl:text-center">
                    <h3 className="font-sofia-bold text-lg text-subtle">
                        Ser agentes de cambio
                    </h3>
                    <p className="mt-3 mb-6 text-normal xl:mb-9">
                        Buscamos desarrollar a las personas de nuestro entorno
                    </p>
                    <div className="flex justify-center mb-12 xl:mb-0">
                        <img
                            className="w-36 xl:h-32 xl:w-auto"
                            src="./img/change.svg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
