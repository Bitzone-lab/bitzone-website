import Footer from '../sections/Footer'
import Header from '../sections/home/Header'
import Section1 from '../sections/home/Section1'
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
            <Section1 />
            <Section2 />
            <Section3 />
            <CallToContact />
            <Footer />
        </>
    )
}
