import Footer from '../sections/Footer'
import Header from '../sections/home/Header'
import Section1 from '../sections/home/Section1'
import Navbar from '../components/Navbar'
import CallToContact from '../sections/CallToContact'
import PageHead from '../components/PageHead'
import Section3 from '../sections/home/Section3'
import Section2 from '../sections/home/Section2'
import { useTranslation } from 'react-i18next'

export default function Home() {
    const { t } = useTranslation()

    return (
        <>
            <PageHead
                title="Bitzone"
                description="Construye tu futuro con Bitzone"
                image="/img/logo_image.svg"
            />
            <Navbar />
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <CallToContact
                title={t('Shall we start to build your future?')}
                description={t('Contact us to...')}
            />
            <Footer />
        </>
    )
}
