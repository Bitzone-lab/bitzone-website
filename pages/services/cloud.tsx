import Navbar from '../../components/Navbar'
import Drawer from '../../components/Drawer'
import Footer from '../../components/Footer'
import HeaderCloud from '../../sections/services/cloud/HeaderCloud'
import Features from '../../sections/services/cloud/Features'
import ContentCloud from '../../sections/services/cloud/ContentCloud'
import Projects from '../../sections/services/Projects'
import CallToContact from '../../sections/services/CallToContact'
import PageHead from '../../components/PageHead'

export default function Cloud() {
    return (
        <>
            <PageHead
                title="Bitzone: Services Cloud"
                description="Es una oportunidad de utilizar los mismos recursos que las grandes empresas, como Amazon o Google, a un costo mínimo. Asimismo, nos permite evitar los riesgos que conllevan el mantener recursos físicos como servidores, la red interna, sistemas operativos, seguridad, entre otros."
            />
            <Navbar />
            <Drawer />
            <HeaderCloud />
            <ContentCloud />
            <Features />
            <Projects />
            <CallToContact />
            <Footer />
        </>
    )
}
