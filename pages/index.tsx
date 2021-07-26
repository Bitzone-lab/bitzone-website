import Footer from '../components/Footer'
import Header from '../sections/home/Header'
import classnames from 'classnames'
import WeAre from '../sections/home/WeAre'
import Navbar from '../components/Navbar'
import TrustUs from '../sections/home/TrustUs'
import CallToContact from '../sections/home/CallToContact'
import WhyWe from '../sections/home/WhyWe'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <WeAre />
            <WhyWe />
            <TrustUs />
            <CallToContact />
            <section className="py-10">
                <Swiper
                    slidesPerView={1.5}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide className="bg-white w-4/5 py-4">
                        <div className="bg-linear-primary p-8 rounded-md">
                            <img
                                src={'img/section_why_we_1.svg'}
                                className="h-32 block"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white w-4/5 py-4">
                        <div className="bg-linear-primary p-8 rounded-md">
                            <img
                                src={'img/section_why_we_2.svg'}
                                className="h-32 block"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white w-4/5 py-4">
                        <div className="bg-linear-primary p-8 rounded-md">
                            <img
                                src={'img/section_why_we_3.svg'}
                                className="h-32 block"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white w-4/5 py-4">
                        <div className="bg-linear-primary p-8 rounded-md">
                            <img
                                src={'img/section_why_we_4.svg'}
                                className="h-32 block"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white w-4/5 py-4">
                        <div className="bg-linear-primary p-8 rounded-md">
                            <img
                                src={'img/section_why_we_1.svg'}
                                className="h-32 block"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white w-4/5 py-4">
                        <div className="bg-linear-primary p-8 rounded-md">
                            <img
                                src={'img/section_why_we_1.svg'}
                                className="h-32 block"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            <Footer />
        </>
    )
}
