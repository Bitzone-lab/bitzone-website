import Navbar from '../../components/Navbar'
import Drawer from '../../components/Drawer'
import Footer from '../../components/Footer'
import Header from '../../sections/services/cloud/Header'
import PageHead from '../../components/PageHead'
import CallToContact from '../../sections/CallToContact'
import Section1 from '../../sections/services/cloud/Section1'
import Section2 from '../../sections/services/cloud/Section2'
import Section3 from '../../sections/services/cloud/Section3'
import Section4 from '../../sections/services/cloud/Section4'

export default function Cloud() {
    return (
        <>
            <PageHead
                title="Bitzone: Services Cloud"
                description="Es una oportunidad de utilizar los mismos recursos que las grandes empresas, como Amazon o Google, a un costo mínimo. Asimismo, nos permite evitar los riesgos que conllevan el mantener recursos físicos como servidores, la red interna, sistemas operativos, seguridad, entre otros."
            />
            <Navbar />
            <Drawer />
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <CallToContact />
            <Footer />
        </>
    )
}
