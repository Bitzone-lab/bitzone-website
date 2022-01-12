import Navbar from '../../components/Navbar'
import Drawer from '../../components/Drawer'
import Section2 from '../../sections/services/ia/Section2'
import Section3 from '../../sections/services/ia/Section3'
import Section4 from '../../sections/services/ia/Section4'
import Footer from '../../sections/Footer'
import PageHead from '../../components/PageHead'
import CallToContact from '../../sections/CallToContact'
import HeaderService from '../../sections/services/HeaderService'
import Section1 from '../../sections/services/ia/Section1'
import { useTranslation } from 'react-i18next'

export default function IA() {
    const { t } = useTranslation()

    return (
        <>
            <PageHead
                title="Bitzone: Services AI"
                description={t('Our AI algorithms allow the...')}
            />
            <Navbar />
            <Drawer />
            <HeaderService
                bg="ia"
                title="IA"
                subtitle={t('Artificial Intelligence')}
                description={t('Our AI algorithms allow the...')}
            />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <CallToContact />
            <Footer />
        </>
    )
}
