import Footer from '../components/Footer'
import Header from '../sections/services/Header'
import WebDevelopment from '../sections/services/WebDevelopment'
import MobileDevelopment from '../sections/services/MobileDevelopment'
import ApiDevelopment from '../sections/services/ApiDevelopment'
import Projects from '../sections/services/Projects'
import CallToContact from '../sections/services/CallToContact'
import Navbar from '../components/Navbar'

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
