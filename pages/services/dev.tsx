import Navbar from '../../components/Navbar'
import Drawer from '../../components/Drawer'
import Header from '../../sections/services/dev/Header'
import Section2 from '../../sections/services/dev/Section2'
import Section3 from '../../sections/services/dev/Section3'
import Section4 from '../../sections/services/dev/Section4'
import Projects from '../../sections/services/Projects'
import CallToContact from '../../sections/services/CallToContact'
import Footer from '../../components/Footer'

export default function Dev() {
    return (
        <>
            <Navbar />
            <Drawer />
            <Header />
            <Section2 />
            <Section3 />
            <Section4 />
            <Projects />
            <CallToContact />
            <Footer />
        </>
    )
}
