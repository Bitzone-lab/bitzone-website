export default function Header() {
    return (
        <header
            className="bg-service-header bg-cover"
            style={{ height: '620px' }}
        >
            <div className="text-white flex justify-center items-center pt-32 flex-col text-center mb-12 xl:pt-56 xl:mb-20">
                <div className="xl:max-w-xl xl:relative">
                    <h1 className="text-4xl mb-5 font-sofia-bold xl:text-8xl xl:mb-16">
                        Siempre a la{' '}
                        <span className="font-sofia-bold text-accent">
                            vanguardia
                        </span>
                    </h1>
                    <p className="text-xl">Descubre lo que podemos ofrecerte</p>
                </div>
            </div>
        </header>
    )
}
