import Footer from '../sections/Footer'
import Navbar from '../components/Navbar'
import PageHead from '../components/PageHead'
import FormContact from '../sections/contacts/FormContact'

export default function Contacts() {
    return (
        <>
            <PageHead
                title="Bitzone: Contactos"
                description="Ponte en contacto con nosotros"
                image="/img/logo_image.svg"
            />
            <Navbar />
            <FormContact />
            <Footer />
        </>
    )
}
