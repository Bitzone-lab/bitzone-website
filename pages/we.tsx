import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function We() {
    return (
        <>
            <Navbar />
            <section className="bg-phrase-about bg-cover bg-center h-80">
                <div className="flex justify-center items-center h-full text-center text-white">
                    <div>
                        <p className="font-sofia-bold text-3xl">
                            El mundo fluye con las olas de ideas,
                        </p>
                        <p className="font-sofia-bold text-3xl">
                            fluye junto a ti
                        </p>
                    </div>
                </div>
            </section>
            <section className="px-4 mt-8 mb-14 xl:max-w-5xl xl:w-full xl:mx-auto xl:mt-40 xl:px-0 xl:mb-40">
                <div className="xl:max-w-3xl xl:w-full xl:mx-auto">
                    <h2 className="font-sofia-bold text-3xl text-subtle text-center xl:text-5xl">
                        Creemos en la mejora de nuestro mundo usando la
                        tecnología
                    </h2>
                    <p className="text-subtle mt-8 mb-16 xl:mt-12 xl:text-xl xl:px-12 xl:mb-40">
                        Vivimos en un mundo que atraviesa cambios acelerados
                        gracias a la tecnología. Al día de hoy, es parte de
                        nuestros procesos productivos, de cómo vemos y
                        entendemos nuestro mundo e incluso nos permite estar
                        conectados con quienes más queremos. Sin embargo, aún
                        hay un gran camino por recorrer. Todavía existen
                        emergencias humanas, sociales y medio ambientales que
                        siguen sin ser atendidas; amenazas, problemas e
                        incógnitas que siguen sin ser resueltas.
                    </p>
                </div>
                <div className="flex justify-center px-14 xl:px-0">
                    <div className="w-48 xl:flex xl:w-full xl:gap-60">
                        <img
                            className="w-48 text-center xl:max-w-md xl:w-full"
                            src="./img/good-team.svg"
                            alt=""
                        />
                        <p className="text-subtle font-semibold mt-12 xl:text-xl xl:mt-0 xl:max-w-sm xl:flex xl:items-center">
                            Es por ello que en Bitzone estamos comprometidos con
                            los grandes cambios, con la mejora de la calidad de
                            vida de quienes nos rodean y con dar oportunidades a
                            talentos como el tuyo. ¡Únetenos en esta gran
                            transformación!
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-phrase-about bg-cover bg-center h-80 xl:h-96">
                <div className="flex justify-center items-center h-full text-center text-white">
                    <div>
                        <p className="font-sofia-bold text-3xl">
                            El mundo fluye con las olas de ideas,
                        </p>
                        <p className="font-sofia-bold text-3xl">
                            fluye junto a ti
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-white mt-16 xl:mb-14">
                <h2 className="font-sofia-bold text-3xl text-subtle text-center">
                    Nuestro propósito
                </h2>
                <p className="text-center mt-16 font-normal text-lg text-subtle mb-8">
                    Transformar vidas a través de la tecnología
                </p>
                <div className="mb-8 xl:mb-14">
                    <img
                        className="w-full"
                        src="./img/better-life.svg"
                        alt=""
                    />
                </div>
                <div className="px-4 xl:max-w-5xl xl:w-full xl:mx-auto xl:px-0 xl:flex xl:gap-7">
                    <div className="xl:text-center">
                        <h3 className="font-sofia-bold text-lg text-subtle">
                            Dar oportunidades
                        </h3>
                        <p className="mt-3 mb-6 text-normal xl:mb-9">
                            El talento está en todas partes, nosotros lo
                            buscamos
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
                            Trabajamos en un entorno agradable donde se fomenta
                            la creatividad
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
                            Buscamos desarrollar a las personas de nuestro
                            entorno
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
            <section>
                <h2 className="font-sofia-bold text-3xl text-subtle text-center">
                    Nuestros valores
                </h2>
            </section>
            <Footer />
        </>
    )
}
