export default function Section3() {
    return (
        <section>
            <div className="w-full mx-auto pt-16 pb-40 max-w-7xl text-center">
                <h2 className="text-4xl font-sofia-bold mx-auto max-w-md text-primary">
                    Ellos confían en la{' '}
                    <span className="font-sofia-bold text-accent">calidad</span>{' '}
                    de nuestro trabajo
                </h2>
                <p className="mt-12 mb-20 px-10 lg:px-0">
                    Varias empresas peruanas y extranjeras ya confían en Bitzone
                    y en sus soluciones en alta tecnología.
                </p>
                <div className="flex justify-between items-center gap-12 flex-wrap px-10">
                    <img
                        src="/images/home-section3/inversiones_la_cruz.png"
                        alt="inversiones_la_cruz"
                        className="mx-auto w-full"
                        style={{ maxWidth: '298px' }}
                    />
                    <img
                        src="/images/home-section3/advance.png"
                        alt="advance"
                        className="mx-auto w-full"
                        style={{ maxWidth: '131px' }}
                    />
                    <img
                        src="/images/home-section3/astrum.png"
                        alt="astrum"
                        className="mx-auto w-full"
                        style={{ maxWidth: '142px' }}
                    />
                    <img
                        src="/images/home-section3/inmotus.png"
                        alt="inmotus"
                        className="mx-auto w-full"
                        style={{ maxWidth: '219px' }}
                    />
                    <img
                        src="/images/home-section3/procustodia.png"
                        alt="procustodia"
                        className="mx-auto w-full"
                        style={{ maxWidth: '197px' }}
                    />
                </div>
            </div>
        </section>
    )
}
