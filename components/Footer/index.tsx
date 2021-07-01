export default function Footer() {
    return (
        <footer className="bg-footer text-white px-4 pt-10 pb-3 w-full">
            <div className="xl:max-w-5xl xl:w-full xl:mx-auto">
                <div className="grid grid-cols-2 gap-y-12 pb-3">
                    <div>
                        <p className="text-base font-bold font-sofia mb-5">
                            Acerca de
                        </p>
                        <p className="text-base font-light mb-5">Nosotros</p>
                        <p className="text-base font-light mb-5">Servicios</p>
                        <p className="text-base font-light">Proyectos</p>
                    </div>
                    <div>
                        <p className="text-base font-bold font-sofia mb-5">
                            Información
                        </p>
                        <p className="text-base font-light mb-5">
                            Política de priv.
                        </p>
                        <p className="text-base font-light mb-5">Aviso legal</p>
                        <p className="text-base font-light mb-5">
                            Política de cookies
                        </p>
                        <p className="text-base font-light">Cfg. de cookies</p>
                    </div>
                    <div>
                        <p className="text-base font-bold font-sofia mb-5">
                            Contacto
                        </p>
                        <p className="text-base font-light mb-5">
                            hello@bitzone.lat
                        </p>
                        <p className="text-base font-light mb-24">
                            +51 956 941 872
                        </p>
                        <div>
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
                                <img
                                    width="20px"
                                    height="20px"
                                    src="img/linkedin.svg"
                                ></img>
                                <img
                                    width="20px"
                                    height="20px"
                                    src="img/instagram.svg"
                                />
                            </div>
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
