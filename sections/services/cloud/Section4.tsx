import Col from '../../../components/Col'

export default function Section4() {
    return (
        <section className="bg-service-cloud-benefits bg-cover">
            <div className="max-w-7xl w-full mx-auto py-32 flex">
                <div className="w-1/2 text-white">
                    <h2 className="text-3xl font-sofia-semibold text-secondary mb-16">
                        ¿De qué manera los servicios de la nube pueden
                        beneficiar a un proyecto?
                    </h2>
                    <Col cols="2" gap={12}>
                        <div>
                            <h4 className="font-sofia-bold">Ahorra costos</h4>
                            <p className="font-overpass-light">
                                No se necesita tener un hardware propio, ya que
                                todo está alojado en los servidores.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-sofia-bold">
                                Ventaja estratégica competitiva
                            </h4>
                            <p className="font-overpass-light">
                                Los tiempos de implementación son casi nulos, y
                                las aplicaciones siempre están en línea.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-sofia-bold">
                                Alta disponibilidad
                            </h4>
                            <p className="font-overpass-light">
                                El alojamiento en la nube elimina la posibilidad
                                de que el servidor falle y cause un tiempo de
                                inactividad .
                            </p>
                        </div>
                        <div>
                            <h4 className="font-sofia-bold">
                                Rápido rendimiento
                            </h4>
                            <p className="font-overpass-light">
                                Ofrece servidores de alto rendimiento con
                                tecnología como CPU potentes y unidades SSD
                                súper rápidas.
                            </p>
                        </div>
                    </Col>
                </div>
                <div className="w-1/2"></div>
            </div>
        </section>
    )
}
