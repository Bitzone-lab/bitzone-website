import Navbar from '../../components/Navbar'
import Drawer from '../../components/Drawer'
import Footer from '../../components/Footer'
import HeaderUx from '../../sections/services/ux/HeaderUx'
import ContentUx from '../../sections/services/ux/ContentUx'

export default function UX() {
    return (
        <>
            <Navbar />
            <Drawer />
            <HeaderUx />
            <ContentUx />
            <Footer />
        </>
    )
}
