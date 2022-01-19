import Navbar from '../../components/Navbar'
import Drawer from '../../components/Drawer'
import Footer from '../../sections/Footer'
import HeaderService from '../../sections/services/HeaderService'
import PageHead from '../../components/PageHead'
import CallToContact from '../../sections/CallToContact'
import Section1 from '../../sections/services/cloud/Section1'
import Section2 from '../../sections/services/cloud/Section2'
import Section3 from '../../sections/services/cloud/Section3'
import Section4 from '../../sections/services/cloud/Section4'
import { useTranslation } from 'react-i18next'

export default function Cloud() {
    const { t } = useTranslation()

    return (
        <>
            <PageHead
                title="Bitzone: Cloud computing"
                description={t('Through our Cloud infrastructure, we...')}
                image="/images/bitzone.png"
            />
            <Navbar />
            <Drawer />
            <HeaderService
                bg="cloud"
                title="CLOUD"
                subtitle="Cloud computing"
                description={t('Through our Cloud infrastructure, we...')}
            />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <CallToContact
                title={t('Are you interested in a CLOUD infrastructure?')}
                description={t('Write to us and...')}
            />
            <Footer />
        </>
    )
}
