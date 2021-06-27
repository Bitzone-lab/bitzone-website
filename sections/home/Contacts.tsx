export default function Contacts() {
    return (
        <section className="grid grid-rows-2 p-4">
            <div className="grid grid-cols-3 gap-x-5 gap-y-5 mb-5 mt-6">
                <div className="wrapper-contact">
                    <img
                        className="object-cover"
                        width="95px"
                        height="29px"
                        src="img/advance-logo.png"
                    />
                </div>
                <div className="wrapper-contact mt-6">
                    <img
                        className="object-cover"
                        width="95px"
                        height="29px"
                        src="img/advance-logo.png"
                    />
                </div>
                <div className="wrapper-contact">
                    <img
                        className='object-cover'
                        width="95px"
                        height="29px"
                        src="img/inokuos-logo.png"
                    />
                </div>
                <div className="wrapper-contact">
                    <img
                        className="object-cover"
                        width="95px"
                        height="29px"
                        src="img/inversiones-laCruz-logo.png"
                    />
                </div>
                <div className="wrapper-contact mt-5">
                    <img
                    className="object-cover"
                        width="95px"
                        height="29px"
                        src="img/mtr-advance-logo.png"
                    />
                </div>
                <div className="wrapper-contact">
                    <img
                        className="object-cover"
                        width="95px"
                        height="29px"
                        src="img/mtr-advance-logo.png"
                    />
                </div>
            </div>
            <div className="mb-14">
                <p className="text-tagline font-bold text-sm mb-5">
                    CONFÍAN EN NOSOTROS
                </p>
                <h2 className="text-subtle font-bold font-sofia text-4xl mb-10">
                    Construimos el futuro del Perú y del mundo
                </h2>
                <p className="text-normal text-xl">
                    Contamos con experiencia realizando proyectos de software
                    para empresas tanto peruanas como extranjeras. Somos
                    reconocidos por la calidad de nuestro equipo y nuestro
                    trabajo. ¿Qué esperas que construyamos juntos el futuro que
                    tanto anhelas?
                </p>
            </div>
        </section>
    )
}
