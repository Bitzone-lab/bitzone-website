import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import SwiperCore, { Autoplay } from 'swiper/core'
import classnames from 'classnames'

interface PropsCarousel {
    content: Array<{ img: string; text?: string }>
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
            className={classnames('xl:hidden mt-6', className)}
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
            {content.map(({ img, text }, i) => (
                <SwiperSlide key={i} className="bg-white w-4/5 py-4">
                    <div className="bg-radial-primary p-8 rounded-md relative flex items-center justify-center">
                        <img src={img} className="h-28 w-28 block" />
                        <p className="absolute left-0 top-36 text-white text-sm text-center w-full">
                            {text || ''}
                        </p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
