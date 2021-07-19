import Footer from '../../components/Footer'
import Header from '../../sections/services/dev/Header'
import WebDevelopment from '../../sections/services/dev/WebDevelopment'
import MobileDevelopment from '../../sections/services/dev/MobileDevelopment'
import ApiDevelopment from '../../sections/services/dev/ApiDevelopment'
import Projects from '../../sections/services/dev/Projects'
import CallToContact from '../../sections/services/dev/CallToContact'
import Navbar from '../../components/Navbar'

export default function Services() {
    return (
        <>
            <Navbar />
            <Header />
            <WebDevelopment />
            <MobileDevelopment />
            <ApiDevelopment />
            <Projects />
            <CallToContact />
            <Footer />
        </>
    )
}
