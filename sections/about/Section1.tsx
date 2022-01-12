import { useTranslation } from 'react-i18next'
import Col from '../../components/Col'

export default function Section1() {
    const { t } = useTranslation()

    return (
        <section className="py-28">
            <div className="xl:max-w-7xl xl:w-full xl:mx-auto px-8">
                <h2 className="font-sofia-bold text-3xl text-subtle text-center xl:text-4xl">
                    {t('Our set of-')}{' '}
                    <span className="text-accent font-sofia-bold">
                        {t('-values')}
                    </span>
                </h2>
                <p className="text-subtle mt-12 text-center">
                    {t('It is part of our...')}
                </p>
                <Col
                    cols="1"
                    className="mt-16 sm:grid-cols-2 lg:grid-cols-4"
                    gap={12}
                    gapY={12}
                >
                    <Security
                        src="/images/about/leadership.png"
                        title={t('Excellence')}
                        description={t('We constantly improve to...')}
                    />
                    <Security
                        src="/images/about/like.png"
                        title={t('Trust')}
                        description={t('With our clients, our...')}
                    />
                    <Security
                        src="/images/about/adaptive.png"
                        title={t('Commitment')}
                        description={t('Essential for the...')}
                    />
                    <Security
                        src="/images/about/supporter.png"
                        title={t('Respect')}
                        description={t('We recognize in our...')}
                    />
                </Col>
            </div>
        </section>
    )
}

function Security({ src, title, description }: SecurityProps) {
    return (
        <div className="text-center">
            <img src={src} alt={title} className="mx-auto mb-3" />
            <h3 className="font-sofia-semibold text-secondary text-lg mb-5">
                {title}
            </h3>
            <p
                className="text-center sm:text-left font-sofia-light text-subtle mx-auto"
                style={{
                    maxWidth: '250px'
                }}
            >
                {description}
            </p>
        </div>
    )
}

interface SecurityProps {
    src: string
    title: string
    description: string
}
