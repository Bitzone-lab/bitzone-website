export default function Section1() {
    return (
        <section>
            <div className="max-w-7xl w-full mx-auto py-24 flex items-center px-8 xl:px-0 flex-wrap sm:flex-nowrap text-center sm:text-left">
                <div className="w-full sm:w-1/2">
                    <img
                        src="/images/services/user-idea.png"
                        alt="red-cloud"
                        className="mx-auto"
                    />
                </div>
                <div className="w-full sm:w-1/2">
                    <h2 className="text-3xl font-sofia-semibold text-secondary mb-10">
                        Customer Intelligence
                    </h2>
                    <p className="max-w-xl text-subtle font-overpass-light mx-auto sm:mx-0">
                        ¿Necesitas obtener información sobre tus clientes de
                        forma sistemática? No hay problema. En Bitzone te
                        ofrecemos IA dedicada a Customer Intelligence, que
                        realiza actividades como segmentación de clientes,
                        cálculo de precios, mantenimiento predictivo y
                        fidelización de clientes.
                    </p>
                </div>
            </div>
        </section>
    )
}
