import Footer from '../components/Footer'
import Header from '../sections/home/Header'
import WeAre from '../sections/home/WeAre'
import Navbar from '../components/Navbar'
import CallToContact from '../sections/CallToContact'
import PageHead from '../components/PageHead'
import Section3 from '../sections/home/Section3'
import Section2 from '../sections/home/Section2'

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
            <Section2 />
            <Section3 />
            <CallToContact />
            <Footer />
        </>
    )
}
