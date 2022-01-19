import Footer from '../sections/Footer'
import Navbar from '../components/Navbar'
import PageHead from '../components/PageHead'
import FormContact from '../sections/contact/FormContact'

export default function Contact() {
    return (
        <>
            <PageHead
                title="Bitzone: Contactos"
                description="Ponte en contacto con nosotros"
                image="/images/bitzone.png"
            />
            <Navbar />
            <FormContact />
            <Footer />
        </>
    )
}
