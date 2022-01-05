import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Header from '../../sections/services/Header'
import Section1 from '../../sections/services/Section1'
import PageHead from '../../components/PageHead'

export default function Services() {
    return (
        <>
            <PageHead
                title="Bitzone: Servicios"
                description="Eche un vistazo a lo que podemos ofrecerle"
            />
            <Navbar />
            <Header />
            <Section1 />
            <Footer />
        </>
    )
}
