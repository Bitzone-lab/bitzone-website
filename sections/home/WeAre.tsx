import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../../components/Button'
import Col from '../../components/Col'

export default function WeAre() {
    const { t } = useTranslation()

    return (
        <section className="bg-black text-white py-20">
            <div className="max-w-7xl w-full mx-auto text-center">
                <h4 className="text-accent font-overpass uppercase text-lg">
                    {t('Why we?')}
                </h4>
                <h2 className="text-5xl font-sofia-semibold max-w-2xl mx-auto mt-2">
                    Somos un equipo apasionado por{' '}
                    <span className="text-accent font-sofia-semibold">
                        la alta tecnología
                    </span>
                </h2>
                <Col cols="4" className="mt-14 text-left" gap={12}>
                    <div>
                        <img
                            src="/images/why_we_us/selfconfident.png"
                            alt="selfconfident"
                            className="mx-auto"
                        />
                        <SubTitle>Estamos en constante crecimiento</SubTitle>
                        <p className="font-sofia-light text-sm">
                            Nos adaptamos a cada proyecto de forma creativa,
                            siempre en búsqueda de crecer y ser agentes de
                            cambio.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/images/why_we_us/change.png"
                            alt="change"
                            className="mx-auto"
                        />
                        <SubTitle>Creemos en la comunicación</SubTitle>
                        <p className="font-sofia-light text-sm">
                            Valoramos la retroalimentación con nuestros clientes
                            para brindarles el mejor producto.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/images/why_we_us/friendly.png"
                            alt="friendly"
                            className="mx-auto"
                        />
                        <SubTitle>Somos un equipo motivado</SubTitle>
                        <p className="font-sofia-light text-sm">
                            Nuestro equipo dispone de dinámicas de grupo, acceso
                            a buena educación y un ambiente laboral comprensivo
                            y empático.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/images/why_we_us/bubbles.png"
                            alt="bubbles"
                            className="mx-auto"
                        />
                        <SubTitle>Formamos nuevos talentos</SubTitle>
                        <p className="font-sofia-light text-sm">
                            Apostamos por nuevos integrantes que busquen crecer
                            con nosotros en tecnología que transforme al mundo.
                        </p>
                    </div>
                </Col>
                <Button className="mt-16 btn-md">{t('More about us')}</Button>
            </div>
        </section>
    )
}

function SubTitle({ children }: { children: ReactNode }) {
    return (
        <h6 className="mt-4 text-center mb-8 mx-auto w-40 font-sofia">
            {children}
        </h6>
    )
}
