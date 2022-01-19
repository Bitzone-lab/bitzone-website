import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import Section2 from '../sections/about/Section2'
import PageHead from '../components/PageHead'
import Header from '../sections/about/Header'
import CallToContact from '../sections/CallToContact'
import Section1 from '../sections/about/Section1'
import { useTranslation } from 'react-i18next'

export default function About() {
    const { t } = useTranslation()

    return (
        <>
            <PageHead
                title="Bitzone: Nosotros"
                description="Más que una empresa, somos una comunidad."
                image="/images/bitzone.png"
            />
            <Navbar />
            <Header />
            <Section1 />
            <Section2 />
            <CallToContact
                title={t('Shall we start to build your future?')}
                description={t('Contact us to...')}
            />
            <Footer />
        </>
    )
}
