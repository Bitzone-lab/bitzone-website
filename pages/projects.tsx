import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import Header from '../sections/projects/Header'
import ListProjects from '../sections/projects/ListProjects'
import PageHead from '../components/PageHead'
import CallToContact from '../sections/CallToContact'
import { useTranslation } from 'react-i18next'

export default function Projects() {
    const { t } = useTranslation()

    return (
        <>
            <PageHead
                title="Bitzone: Proyectos"
                description="Mejoramos el mundo con tecnología, y he aquí la prueba de ello"
                image="/img/logo_image.svg"
            />
            <Navbar />
            <Header />
            <ListProjects />
            <CallToContact
                title={t('Did you find it cool?')}
                description={t('Write to us and...')}
            />
            <Footer />
        </>
    )
}
