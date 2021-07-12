import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../sections/projects/Header'
import ListProjects from '../sections/projects/ListProjects'
import CallToContact from '../sections/projects/CallToContact'

export default function Projects() {
    return (
        <>
            <Navbar />
            <Header />
            <ListProjects />
            <CallToContact />
            <Footer />
        </>
    )
}
