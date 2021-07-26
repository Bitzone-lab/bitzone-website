import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import SwiperCore, { Autoplay } from 'swiper/core'

interface PropsCarousel {
    content: Array<string>
    onClickLeft: () => void
    onClickRight: () => void
}

export default function Carousel({
    content,
    onClickRight,
    onClickLeft
}: PropsCarousel) {
    SwiperCore.use([Autoplay])

    return (
        <>
            <Swiper
                slidesPerView={1.5}
                spaceBetween={30}
                centeredSlides={true}
                onSlideChange={e => {
                    if (e?.swipeDirection === 'next') {
                        onClickRight()
                    }
                    if (e?.swipeDirection === 'prev') {
                        onClickLeft()
                    }
                }}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false
                }}
            >
                {content.map((img, i) => (
                    <SwiperSlide key={i} className="bg-white w-4/5 py-4">
                        <div className="bg-linear-primary p-8 rounded-md">
                            <img src={img} className="h-32 block" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
