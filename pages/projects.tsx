import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../sections/projects/Header'
import ListProjects from '../sections/projects/ListProjects'
import CallToContact from '../sections/projects/CallToContact'
import PageHead from '../components/PageHead'

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
