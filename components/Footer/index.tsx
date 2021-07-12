export default function Footer() {
    return (
        <footer className="bg-footer text-white px-4 pb-3 w-full">
            <div className="xl:max-w-5xl xl:w-full xl:mx-auto">
                <div className="flex-wrap flex py-16 xl:justify-between">
                    <div className="w-1/2 xl:w-auto xl:order-2">
                        <p className="text-base font-sofia-bold mb-5">
                            Acerca de
                        </p>
                        <p className="text-base mb-5">Nosotros</p>
                        <p className="text-base mb-5">Servicios</p>
                        <p className="text-base">Proyectos</p>
                    </div>
                    <div className="w-1/2 xl:w-auto xl:order-3">
                        <p className="text-base font-sofia-bold mb-5">
                            Información
                        </p>
                        <p className="text-base mb-5">Política de priv.</p>
                        <p className="text-base mb-5">Aviso legal</p>
                        <p className="text-base mb-5">Política de cookies</p>
                        <p className="text-base">Cfg. de cookies</p>
                    </div>
                    <div className="w-full mt-11 xl:w-auto xl:mt-0 xl:order-4">
                        <p className="text-base font-sofia-bold mb-5">
                            Contacto
                        </p>
                        <p className="text-base mb-5">hello@bitzone.lat</p>
                        <p className="text-base mb-24">+51 956 941 872</p>
                    </div>
                    <div className="w-full xl:w-auto xl:order-1">
                        <div className="flex gap-2 mb-7">
                            <img
                                width="26px"
                                height="13px"
                                src="img/logo_image.svg"
                            ></img>
                            <img
                                width="62px"
                                height="13px"
                                src="img/bitzone.svg"
                            />
                        </div>
                        <p>Empresa consultora de software</p>
                        <div className="flex mt-9 gap-5">
                            <a
                                href="https://www.linkedin.com/company/bitzone-lat"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    width="20px"
                                    height="20px"
                                    src="img/linkedin.svg"
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
                                    src="img/instagram.svg"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center text-base">
                    Copyright &copy;Bitzone 2021
                </div>
            </div>
        </footer>
    )
}
