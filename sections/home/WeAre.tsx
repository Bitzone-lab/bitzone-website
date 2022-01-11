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
                <h2 className="text-4xl md:text-5xl font-sofia-semibold max-w-2xl mx-auto mt-2 px-10 md:px-0">
                    Somos un equipo apasionado por{' '}
                    <span className="text-accent font-sofia-semibold">
                        la alta tecnología
                    </span>
                </h2>
                <Col
                    cols="1"
                    className="mt-14 text-center lg:text-left px-10 xl:px-0 sm:grid-cols-2 lg:grid-cols-4"
                    gap={12}
                    gapY={12}
                >
                    <div>
                        <img
                            src="/images/why_we_us/selfconfident.png"
                            alt="selfconfident"
                            className="mx-auto"
                        />
                        <SubTitle>Estamos en constante crecimiento</SubTitle>
                        <Desc>
                            Nos adaptamos a cada proyecto de forma creativa,
                            siempre en búsqueda de crecer y ser agentes de
                            cambio.
                        </Desc>
                    </div>
                    <div>
                        <img
                            src="/images/why_we_us/change.png"
                            alt="change"
                            className="mx-auto"
                        />
                        <SubTitle>Creemos en la comunicación</SubTitle>
                        <Desc>
                            Valoramos la retroalimentación con nuestros clientes
                            para brindarles el mejor producto.
                        </Desc>
                    </div>
                    <div>
                        <img
                            src="/images/why_we_us/friendly.png"
                            alt="friendly"
                            className="mx-auto"
                        />
                        <SubTitle>Somos un equipo motivado</SubTitle>
                        <Desc>
                            Nuestro equipo dispone de dinámicas de grupo, acceso
                            a buena educación y un ambiente laboral comprensivo
                            y empático.
                        </Desc>
                    </div>
                    <div>
                        <img
                            src="/images/why_we_us/bubbles.png"
                            alt="bubbles"
                            className="mx-auto"
                        />
                        <SubTitle>Formamos nuevos talentos</SubTitle>
                        <Desc>
                            Apostamos por nuevos integrantes que busquen crecer
                            con nosotros en tecnología que transforme al mundo.
                        </Desc>
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

function Desc({ children }: { children: ReactNode }) {
    return (
        <p className="font-sofia-light text-sm max-w-xs mx-auto">{children}</p>
    )
}
