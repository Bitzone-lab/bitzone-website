import NewCarousel from '../../components/NewCarousel'
import contentImg from '../../todo/carousel_values.json'

export default function CarouselValues() {
    return <NewCarousel className="mt-10 mb-20" content={contentImg} />
}
