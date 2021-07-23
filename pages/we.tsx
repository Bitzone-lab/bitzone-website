import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from './about/Hero'
import Section2 from './about/Section2'
import Section3 from './about/Section3'
import Section4 from './about/Section4'
import OurValues from './about/OurValues'

export default function We() {
    return (
        <>
            <Navbar />
            <Hero />
            <Section2 />
            <Section3 />
            <Section4 />
            <OurValues />
            <Footer />
        </>
    )
}
