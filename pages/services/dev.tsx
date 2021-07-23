import Navbar from '../../components/Navbar'
import Drawer from '../../components/Drawer'
import Header from '../../sections/services/dev/Header'
import WebDevelopment from '../../sections/services/dev/WebDevelopment'
import MobileDevelopment from '../../sections/services/dev/MobileDevelopment'
import ApiDevelopment from '../../sections/services/dev/ApiDevelopment'
import Projects from '../../sections/services/dev/Projects'
import CallToContact from '../../sections/services/dev/CallToContact'
import Footer from '../../components/Footer'

export default function Dev() {
    return (
        <>
            <Navbar />
            <Drawer />
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
