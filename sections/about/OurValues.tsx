import CardsValues from './CardsValues'
import CarouselValues from './CarouselValues'

export default function OutValues() {
    return (
        <section>
            <div className="xl:max-w-6xl xl:w-full mx-auto pt-16">
                <h2 className="font-sofia-bold text-4xl xl:text-5xl text-subtle text-center">
                    Nuestros valores
                </h2>
                <CardsValues />
                <CarouselValues />
            </div>
        </section>
    )
}
