import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import Icon from '../Icon'

export default function Footer() {
    const { t } = useTranslation()
    return (
        <footer className="bg-footer text-white px-8 xl:px-0 pb-5 w-full">
            <div className="xl:max-w-6xl xl:w-full xl:mx-auto">
                <div className="flex-wrap flex py-16 xl:justify-between">
                    <div className="w-1/2 xl:w-auto xl:order-2">
                        <p className="text-base font-sofia-bold mb-5">
                            Acerca de
                        </p>
                        <Link href="/about">
                            <a className="text-base mb-4 hover:underline block">
                                Nosotros
                            </a>
                        </Link>
                        <Link href="/projects">
                            <a className="text-base hover:underline">
                                Proyectos
                            </a>
                        </Link>
                    </div>
                    <div className="w-1/2 xl:w-auto xl:order-3">
                        <p className="text-base font-sofia-bold mb-5">
                            Servicios
                        </p>
                        <p className="text-base mb-4">Ingeniería de Software</p>
                        <p className="text-base mb-4">
                            Inteligencia Artificial
                        </p>
                        <p className="text-base mb-4">Cloud Computing</p>
                    </div>
                    <div className="w-full mt-11 xl:w-auto xl:mt-0 xl:order-4">
                        <p className="text-base font-sofia-bold mb-5">
                            Contacto
                        </p>
                        <Link href="mailto: hello@bitzone.lat">
                            <a className="text-base mb-4 block hover:underline">
                                hello@bitzone.lat
                            </a>
                        </Link>
                        <p className="font-overpass-light mb-6">
                            <Icon name="whatsapp" className="inline mr-2" />
                            Escríbenos
                            <a
                                href="https://api.whatsapp.com/send?phone=51956941872&text=Hola+Bitzone+deseo+informaci%C3%B3n+sobre+un+proyecto+a+realizar"
                                target="_blank"
                                rel="noreferrer"
                                className="text-base ml-2 underline font-overpass-bold"
                            >
                                Aquí
                            </a>
                        </p>
                    </div>
                    <div className="w-full xl:w-auto xl:order-1">
                        <div className="flex gap-2 mb-7">
                            <img
                                width="26px"
                                height="13px"
                                src="/img/logo_image.svg"
                            ></img>
                            <img
                                width="62px"
                                height="13px"
                                src="/img/bitzone.svg"
                            />
                        </div>
                        <p className="w-48 font-overpass-light">
                            {t('High-tech development company')}
                        </p>
                        <div className="flex mt-9 gap-5">
                            <a
                                href="https://www.linkedin.com/company/bitzone-lat"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    width="20px"
                                    height="20px"
                                    src="/img/linkedin.svg"
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/bitzone.lat/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    width="20px"
                                    height="20px"
                                    src="/img/instagram.svg"
                                />
                            </a>
                            <a
                                href="https://github.com/Bitzone-lab/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    width="20px"
                                    height="20px"
                                    src="/img/github.svg"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center font-overpass-light">
                    Copyright &copy;Bitzone 2021
                </div>
            </div>
        </footer>
    )
}
