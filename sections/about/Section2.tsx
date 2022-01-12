import { useTranslation } from 'react-i18next'
import Col from '../../components/Col'

export default function Section2() {
    const { t } = useTranslation()

    return (
        <section className="pt-24 pb-40">
            <div className="xl:max-w-7xl xl:w-full xl:mx-auto">
                <h4 className="text-center text-accent uppercase font-sofia-semibold mb-4">
                    {t('Our team')}
                </h4>
                <h2 className="font-sofia-bold text-subtle text-3xl text-center xl:text-4xl max-w-lg mx-auto">
                    {t('Always embarking on-')}{' '}
                    <span className="text-accent font-sofia-bold">
                        {t('-new adventures')}
                    </span>
                </h2>
                <p className="text-subtle mt-12 font-overpass-light px-10 xl:px-0">
                    {t('Bitzone is a high-tech...')}
                </p>
                <Col
                    cols="1"
                    className="mt-20 sm:grid-cols-2 lg:grid-cols-4"
                    gap={12}
                    gapY={12}
                >
                    <Profile
                        src="/images/about/luigui.png"
                        title="Luigui Astohuamán"
                        description="CEO"
                    />
                    <Profile
                        src="/images/about/diana.png"
                        title="Diana Barriga"
                        description={t('Project Lead')}
                    />
                    <Profile
                        src="/images/about/rodo.png"
                        title="Rodolfo Zevallos"
                        description={t('Artificial Intelligence Researcher')}
                    />
                    <Profile
                        src="/images/about/mj.png"
                        title="María José Campos"
                        description={t('Lead Digital Designer')}
                    />
                </Col>
            </div>
        </section>
    )
}

function Profile({ src, title, description }: ProfileProps) {
    return (
        <div className="text-center">
            <img src={src} alt={title} className="mx-auto mb-3" />
            <h3 className="font-sofia-semibold text-secondary text-lg">
                {title}
            </h3>
            <p className="font-sofia-light w-40 mx-auto">{description}</p>
        </div>
    )
}

interface ProfileProps {
    src: string
    title: string
    description: string
}
