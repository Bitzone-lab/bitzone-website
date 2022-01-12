import { useTranslation } from 'react-i18next'
import Col from '../../../components/Col'

export default function Section4() {
    const { t } = useTranslation()

    return (
        <section className="bg-service-cloud-benefits bg-cover">
            <div className="max-w-7xl w-full mx-auto py-32 flex px-8">
                <div className="w-full lg:w-1/2 text-white px-8 lg:px-0">
                    <h2 className="text-3xl font-sofia-semibold text-secondary mb-16">
                        {t('How can cloud services benefit a project?')}
                    </h2>
                    <Col cols="1" className="sm:grid-cols-2" gap={12} gapY={6}>
                        <div>
                            <h4 className="font-sofia-bold mb-2">
                                {t('Saves costs')}
                            </h4>
                            <p className="font-overpass-light">
                                {t('It is not necessary to...')}
                            </p>
                        </div>
                        <div>
                            <h4 className="font-sofia-bold mb-2">
                                {t('Competitive strategic advantage')}
                            </h4>
                            <p className="font-overpass-light">
                                {t('Deployment times are...')}
                            </p>
                        </div>
                        <div>
                            <h4 className="font-sofia-bold mb-2">
                                {t('High availability')}
                            </h4>
                            <p className="font-overpass-light">
                                {t('Cloud hosting eliminates the...')}
                            </p>
                        </div>
                        <div>
                            <h4 className="font-sofia-bold mb-2">
                                {t('Fast performance')}
                            </h4>
                            <p className="font-overpass-light">
                                {t('It offers high-performance...')}
                            </p>
                        </div>
                    </Col>
                </div>
                <div className="w-1/2 hidden lg:block"></div>
            </div>
        </section>
    )
}
