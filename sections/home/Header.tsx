import Icon from '../../components/Icon'

export default function Header() {
    return (
        <header className="hero min-h-screen bg-linear-primary text-white">
            <div className="hero-content text-neutral-content pb-40">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold font-sofia leading-tight">
                        Construye tu futuro con Bitzone
                    </h1>
                    <p className="mb-10 text-2xl">
                        En Bitzone contamos con los profesionales para construir
                        tu futuro
                    </p>
                    <div className="flex items-center text-accent">
                        <a className="text-xl font-bold font-sofia" href="#">
                            Descrube cómo
                        </a>
                        <Icon
                            className="ml-2 mt-1"
                            name="arrow-right"
                            size={15}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}
