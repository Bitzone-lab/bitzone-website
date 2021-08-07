import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import SwiperCore, { Autoplay } from 'swiper/core'
import classnames from 'classnames'
import ItemCarousel from './ItemCarousel'

interface PropsCarousel {
    content: Array<{ img: string; text?: string; descriptionBack?: string }>
    onClickLeft?: () => void
    onClickRight?: () => void
    className?: string
}

export default function Carousel({
    content,
    onClickRight = () => null,
    onClickLeft = () => null,
    className = ''
}: PropsCarousel) {
    SwiperCore.use([Autoplay])

    return (
        <Swiper
            slidesPerView={1.5}
            spaceBetween={30}
            centeredSlides={true}
            className={classnames('xl:hidden mt-6 w-full', className)}
            breakpoints={{
                480: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                640: {
                    slidesPerView: 4,
                    spaceBetween: 40
                }
            }}
            onSlideChange={(e: any) => {
                if (e.swipeDirection === 'next') {
                    onClickRight()
                } else if (e?.swipeDirection === 'prev') {
                    onClickLeft()
                } else {
                    onClickRight()
                }
            }}
            autoplay={{
                delay: 10000,
                disableOnInteraction: false
            }}
        >
            {content.map(({ img, text, descriptionBack }, i) => (
                <SwiperSlide key={i} className="bg-white w-4/5 py-4">
                    <ItemCarousel
                        img={img}
                        text={text}
                        descriptionBack={descriptionBack}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
