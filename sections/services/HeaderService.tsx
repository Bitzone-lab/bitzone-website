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
            <div className="p-4 text-white text-center xl:max-w-7xl xl:w-full xl:mx-auto xl:text-left xl:pl-0">
                <h1 className="font-sofia-bold text-6xl xl:text-8xl mb-8">
                    {title}
                </h1>
                <p className="font-light font-sofia text-base mb-10 xl:font-normal xl:text-2xl">
                    {subtitle}
                </p>
                <p className="font-normal text-xl xl:max-w-3xl">
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
