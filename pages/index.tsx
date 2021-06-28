import Footer from '../components/Footer'
import Header from '../sections/home/Header'
import WeAre from '../sections/home/WeAre'
import Navbar from '../components/Navbar'
import Contacts from '../sections/home/Contacts'
import CallToContact from '../sections/home/CallToContact'
import FormContact from '../sections/home/FormContact'

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <WeAre />
            <Contacts />
            <CallToContact />
            <FormContact />
            <Footer />
        </>
    )
}
