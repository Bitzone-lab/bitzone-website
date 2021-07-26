import Navbar from '../../components/Navbar'
import Drawer from '../../components/Drawer'
import Header from '../../sections/services/dev/Header'
import WebDevelopment from '../../sections/services/dev/WebDevelopment'
import MobileDevelopment from '../../sections/services/dev/MobileDevelopment'
import ApiDevelopment from '../../sections/services/dev/ApiDevelopment'
import Projects from '../../sections/services/Projects'
import CallToContact from '../../sections/services/CallToContact'
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
            <Projects type="dev" />
            <CallToContact />
            <Footer />
        </>
    )
}
