import Navbar from '../../components/Navbar'
import Drawer from '../../components/Drawer'
import Section2 from '../../sections/services/ia/Section2'
import Section3 from '../../sections/services/ia/Section3'
import Section4 from '../../sections/services/ia/Section4'
import Footer from '../../components/Footer'
import PageHead from '../../components/PageHead'
import CallToContact from '../../sections/CallToContact'
import HeaderService from '../../sections/services/HeaderService'
import Section1 from '../../sections/services/ia/Section1'

export default function IA() {
    return (
        <>
            <PageHead
                title="Bitzone: Services Dev"
                description="Significa para nosotros crear aplicaciones tecnológicas utilizando herramientas de programación, técnicas y patrones con el fin de brindar una solución a uno o muchos problemas del entorno. Además, involucra realizar tareas creativas y con ingenio en el plazo establecido conforme a lo que se requiere."
            />
            <Navbar />
            <Drawer />
            <HeaderService
                bg="ia"
                title="IA"
                subtitle="Inteligencia Artificial"
                description="Nuestros algoritmos de IA permiten la efectiva construcción, categorización y reconocimiento de datos, agilizando y automatizando procesos."
            />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <CallToContact />
            <Footer />
        </>
    )
}
