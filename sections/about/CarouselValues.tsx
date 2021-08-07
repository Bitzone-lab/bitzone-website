import NewCarousel from '../../components/NewCarousel'
import contentData from '../../todo/carousel_values.json'

export default function CarouselValues() {
    return <NewCarousel className="mt-10 mb-20" content={contentData} />
}
