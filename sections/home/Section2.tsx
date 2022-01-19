import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import Button from '../../components/Button'

export default function Section2() {
    const { t } = useTranslation()
    const { push } = useRouter()
    return (
        <section>
            <div className="w-full mx-auto py-20 max-w-7xl flex items-center flex-wrap lg:flex-nowrap">
                <div className="w-full px-10 lg:w-1/2 lg:pr-32">
                    <h3 className="text-accent font-sofia uppercase mb-4">
                        {t('Why Us?')}
                    </h3>
                    <h2 className="text-4xl font-sofia-bold max-w-md text-primary">
                        {t('We develop-')}{' '}
                        <span className="text-accent font-sofia-bold">
                            {t('-innovative technologies-')}
                        </span>{' '}
                        {t('-for Peru and the world')}
                    </h2>
                    <p className="mt-12 mb-16 pr-0 lg:pr-4 xl:pr-20">
                        {t('We have experience in...')}
                    </p>
                    <div className="text-center">
                        <Button
                            className="mb-6"
                            onClick={() => push('/projects')}
                        >
                            {t('Discover our projects')}
                        </Button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <img
                        src="/images/vsc.jpg"
                        alt="vsc"
                        className="mx-auto"
                        width="100%"
                        height="auto"
                    />
                </div>
            </div>
        </section>
    )
}
