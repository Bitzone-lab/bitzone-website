import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroM from '../sections/about/HeroM'
import HeroD from '../sections/about/HeroD'
import Section2 from '../sections/about/Section2'
import Section3 from '../sections/about/Section3'
import Section4 from '../sections/about/Section4'
import OurValues from '../sections/about/OurValues'
import PageHead from '../components/PageHead'

export default function About() {
    return (
        <>
            <PageHead
                title="Bitzone: Nosotros"
                description="Más que una empresa, somos una comunidad."
            />
            <Navbar />
            <HeroM />
            <HeroD />
            <Section2 />
            <Section3 />
            <Section4 />
            <OurValues />
            <Footer />
        </>
    )
}