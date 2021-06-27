import Footer from '../components/Footer'
import Header from '../sections/home/Header'
import WeAre from '../sections/home/WeAre'
import Navbar from '../components/Navbar'
import Contacts from '../sections/home/Contacts'

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <WeAre />
            <Contacts />
            <Footer />
        </>
    )
}
