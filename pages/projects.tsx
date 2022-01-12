import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import Header from '../sections/projects/Header'
import ListProjects from '../sections/projects/ListProjects'
import PageHead from '../components/PageHead'
import CallToContact from '../sections/CallToContact'

export default function Projects() {
    return (
        <>
            <PageHead
                title="Bitzone: Proyectos"
                description="Mejoramos el mundo con tecnología, y he aquí la prueba de ello"
            />
            <Navbar />
            <Header />
            <ListProjects />
            <CallToContact />
            <Footer />
        </>
    )
}
