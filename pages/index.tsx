import Footer from '../components/Footer'
import Header from '../sections/home/Header'
import WeAre from '../sections/home/WeAre'
import Navbar from '../components/Navbar'
import TrustUs from '../sections/home/TrustUs'
import CallToContact from '../sections/home/CallToContact'
import WhyWe from '../sections/home/WhyWe'
import PageHead from '../components/PageHead'

export default function Home() {
    return (
        <>
            <PageHead
                title="Bitzone"
                description="Contruye tu futuro con Bitzone"
            />
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
