import Navbar from '../../components/Navbar'
import Drawer from '../../components/Drawer'
import Footer from '../../components/Footer'
import PageHead from '../../components/PageHead'
import CallToContact from '../../sections/CallToContact'
import HeaderService from '../../sections/services/HeaderService'
import Section2 from '../../sections/services/ing/Section2'
import Section1 from '../../sections/services/ing/Section1'

export default function Ing() {
    return (
        <>
            <PageHead
                title="Bitzone: Service UX"
                description="Para hablar de UX/UI tenemos primero que tomar en cuenta algunos conceptos previos. Lo primero sería explicar las propias siglas UX/UI, las cuales significan User Experience/ User Interface. Traducido al español sería “Experiencia de Usuario/ Interfaz de Usuario”; pero, ¿qué significa esto realmente?"
            />
            <Navbar />
            <Drawer />
            <HeaderService
                title="ING"
                subtitle="Ingeniería de Software"
                description="Creamos productos digitales para desktop o móvil a tu medida, según lo que requieras."
                bg="ing"
            />
            <Section1 />
            <Section2 />
            <CallToContact />
            <Footer />
        </>
    )
}
