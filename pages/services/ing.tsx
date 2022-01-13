import Navbar from '../../components/Navbar'
import Drawer from '../../components/Drawer'
import Footer from '../../sections/Footer'
import PageHead from '../../components/PageHead'
import CallToContact from '../../sections/CallToContact'
import HeaderService from '../../sections/services/HeaderService'
import Section2 from '../../sections/services/ing/Section2'
import Section1 from '../../sections/services/ing/Section1'
import { useTranslation } from 'react-i18next'

export default function Ing() {
    const { t } = useTranslation()

    return (
        <>
            <PageHead
                title="Bitzone: Service Engineering"
                description={t('We create digital...')}
                image="/img/logo_image.svg"
            />
            <Navbar />
            <Drawer />
            <HeaderService
                title="ING"
                subtitle={t('Software Engineering')}
                description={t('We create digital...')}
                bg="ing"
            />
            <Section1 />
            <Section2 />
            <CallToContact
                title={t('Do you have a project...')}
                description={t('Write to us and...')}
            />
            <Footer />
        </>
    )
}
