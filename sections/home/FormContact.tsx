import { useState } from 'react'
import Button from '../../components/Button'

export default function FormContact() {
    const [success, setSuccess] = useState(false)
    return (
        <section
            style={{ height: '1015px' }}
            className="bg-white h-96 relative"
        >
            <div className="h-2/4 bg-contact-form bg-cover"></div>
            <div className="bg-transparent absolute top-0 w-full h-full flex justify-center items-end">
                {!success && (
                    <form
                        onSubmit={() => setSuccess(true)}
                        className="bg-white px-4 py-8 mb-10 max-w-xs"
                    >
                        <h3 className="text-subtle font-bold text-3xl font-sofia text-center mb-4">
                            Ponte en contacto con nosotros
                        </h3>
                        <p className="font-light text-subtle font-sans text-base mb-7">
                            Te responderemos en un máximo de 2 días hábiles
                        </p>
                        <label className="label-form">Nombre</label>
                        <input
                            type="text"
                            placeholder="ejemplo@mail.com"
                            className="input input-ghost w-full mb-5"
                        ></input>
                        <label className="label-form">Email</label>
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="input input-ghost w-full mb-5"
                        ></input>
                        <label className="label-form">Motivo</label>
                        <textarea
                            placeholder="Cuéntanos tus motivos, consultas, idea de proyecto... ¡Queremos escucharte!"
                            className="textarea h-36 textarea-ghost w-full"
                        ></textarea>
                        <Button
                            onClick={() => setSuccess(true)}
                            className="w-full mt-5"
                        >
                            Enviar
                        </Button>
                    </form>
                )}
                {success && (
                    <div className="bg-white px-4 py-8 mb-10 max-w-xs">
                        <h3 className="text-subtle font-bold text-3xl font-sofia text-center mb-4">
                            ¡Genial!
                        </h3>
                        <p className="font-light text-subtle font-sans text-base mb-16">
                            Gracias por dar este primer paso junto con nosotros.
                            Te estaremos respondiendo lo más pronto posible.
                        </p>
                        <img
                            className="mx-auto w-full"
                            src="img/success-contact.svg"
                        />
                        <Button
                            onClick={() => setSuccess(false)}
                            className="w-full mt-16"
                        >
                            Regresar a home
                        </Button>
                    </div>
                )}
            </div>
        </section>
    )
}
