import Footer from '../components/Footer'
import Header from '../sections/home/Header'
import WeAre from '../sections/home/WeAre'
import Navbar from '../components/Navbar'
import TrustUs from '../sections/home/TrustUs'
import CallToContact from '../sections/home/CallToContact'
import WhyWe from '../sections/home/WhyWe'

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <WeAre />
            <WhyWe />
            <TrustUs />
            <CallToContact />
            <Footer />
        </>
    )
}
