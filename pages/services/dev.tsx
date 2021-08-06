import Navbar from '../../components/Navbar'
import Drawer from '../../components/Drawer'
import Header from '../../sections/services/dev/Header'
import Section2 from '../../sections/services/dev/Section2'
import Section3 from '../../sections/services/dev/Section3'
import Section4 from '../../sections/services/dev/Section4'
import Projects from '../../sections/services/Projects'
import CallToContact from '../../sections/services/CallToContact'
import Footer from '../../components/Footer'
import PageHead from '../../components/PageHead'
import content from '../../todo/carousel_project_dev_content.json'

export default function Dev() {
    return (
        <>
            <PageHead
                title="Bitzone: Services Dev"
                description="Significa para nosotros crear aplicaciones tecnológicas utilizando herramientas de programación, técnicas y patrones con el fin de brindar una solución a uno o muchos problemas del entorno. Además, involucra realizar tareas creativas y con ingenio en el plazo establecido conforme a lo que se requiere."
            />
            <Navbar />
            <Drawer />
            <Header />
            <Section2 />
            <Section3 />
            <Section4 />
            <Projects
                titleSection={'Our projects ... development'}
                content={content}
            />
            <CallToContact />
            <Footer />
        </>
    )
}
