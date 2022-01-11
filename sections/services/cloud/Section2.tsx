export default function Section2() {
    return (
        <section>
            <div className="max-w-7xl w-full mx-auto py-24 flex px-8 xl:px-0 flex-wrap sm:flex-nowrap text-center sm:text-left">
                <div className="w-full sm:w-1/2">
                    <img
                        src="/images/services/red-cloud.png"
                        alt="red-cloud"
                        className="mx-auto mb-6"
                    />
                </div>
                <div className="w-full sm:w-1/2">
                    <h2 className="text-3xl font-sofia-semibold text-secondary mb-10">
                        Infraestructura
                    </h2>
                    <p className="max-w-xl text-subtle font-overpass-light">
                        Utilizamos servicios de AWS como servidores virtuales
                        (EC2), almacenamiento en Bucket S3, base de datos
                        relacionales (RDS), base de datos no relacionales
                        (Elasticsearch), recursos de red como redes virtuales
                        privadas en la nube (VPC), Orquestadores de contenedores
                        como Fargate y Kubernetes (EKS) entre otros recursos con
                        el fin de cumplir con los objetivos de nuestros
                        clientes.
                    </p>
                </div>
            </div>
        </section>
    )
}
