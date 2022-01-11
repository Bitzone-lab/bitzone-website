export default function HeaderService({
    title,
    subtitle,
    description,
    bg
}: HeaderServiceProps) {
    return (
        <header
            className={`bg-${bg} bg-cover flex items-center`}
            style={{ height: '575px' }}
        >
            <div className="p-10 text-white xl:max-w-7xl xl:w-full xl:mx-auto text-left xl:pl-0">
                <h1 className="font-sofia-bold text-6xl md:text-8xl mb-8">
                    {title}
                </h1>
                <p className="font-sofia mb-10 text-2xl">{subtitle}</p>
                <p className="font-overpass text-xl max-w-lg xl:max-w-2xl">
                    {description}
                </p>
            </div>
        </header>
    )
}

interface HeaderServiceProps {
    title: string
    subtitle: string
    description: string
    bg: string
}
