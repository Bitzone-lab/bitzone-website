import Navbar from '../../components/Navbar'
import Drawer from '../../components/Drawer'
import Footer from '../../components/Footer'
import HeaderCloud from '../../sections/services/cloud/HeaderCloud'
import Features from '../../sections/services/cloud/Features'
import ContentCloud from '../../sections/services/cloud/ContentCloud'
import Projects from '../../sections/services/Projects'
import CallToContact from '../../sections/services/CallToContact'

export default function Cloud() {
    return (
        <>
            <Navbar />
            <Drawer />
            <HeaderCloud />
            <ContentCloud />
            <Features />
            <Projects type="cloud" />
            <CallToContact />
            <Footer />
        </>
    )
}
