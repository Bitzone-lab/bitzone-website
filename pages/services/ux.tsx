import Navbar from '../../components/Navbar'
import Drawer from '../../components/Drawer'
import Footer from '../../components/Footer'
import HeaderUx from '../../sections/services/ux/HeaderUx'
import ContentUx from '../../sections/services/ux/ContentUx'
import Projects from '../../sections/services/Projects'
import CallToContact from '../../sections/services/CallToContact'
import PageHead from '../../components/PageHead'

export default function UX() {
    return (
        <>
            <PageHead
                title="Bitzone: Service UX"
                description="Para hablar de UX/UI tenemos primero que tomar en cuenta algunos conceptos previos. Lo primero sería explicar las propias siglas UX/UI, las cuales significan User Experience/ User Interface. Traducido al español sería “Experiencia de Usuario/ Interfaz de Usuario”; pero, ¿qué significa esto realmente?"
            />
            <Navbar />
            <Drawer />
            <HeaderUx />
            <ContentUx />
            <Projects />
            <CallToContact />
            <Footer />
        </>
    )
}
