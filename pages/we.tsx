import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../sections/about/Hero'
import Section2 from '../sections/about/Section2'
import Section3 from '../sections/about/Section3'
import Section4 from '../sections/about/Section4'
import OurValues from '../sections/about/OurValues'

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
