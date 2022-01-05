import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Section2 from '../sections/about/Section2'
import PageHead from '../components/PageHead'
import Header from '../sections/about/Header'
import CallToContact from '../sections/CallToContact'
import Section1 from '../sections/about/Section1'

export default function About() {
    return (
        <>
            <PageHead
                title="Bitzone: Nosotros"
                description="Más que una empresa, somos una comunidad."
            />
            <Navbar />
            <Header />
            <Section1 />
            <Section2 />
            <CallToContact />
            <Footer />
        </>
    )
}
