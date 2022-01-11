export default function Header() {
    return (
        <header
            className="hero bg-about-header cover"
            style={{ height: '700px' }}
        >
            <div className="hero-content justify-start max-w-7xl w-full">
                <div className="px-2 sm:px-8 xl:px-0">
                    <h1 className="mb-8 text-5xl font-bold font-sofia-semibold text-white">
                        Somos una{' '}
                        <span className="font-sofia-semibold text-accent">
                            comunidad
                        </span>
                    </h1>
                    <p className="mb-5 text-lg max-w-2xl text-white">
                        La cultura de Bitzone está enfocada en las personas y su
                        desarrollo. No solo somos compañeros de trabajo, somos
                        amigos y formamos parte de una comunidad. Queremos dar
                        oportunidades a grandes talentos.
                    </p>
                </div>
            </div>
        </header>
    )
}
