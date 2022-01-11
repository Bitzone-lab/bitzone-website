import { useTranslation } from 'react-i18next'
import Button from '../../components/Button'
import SectionSuccess from './SectionSuccess'
import Input from '../../components/Input'
import TextArea from '../../components/TextArea'
import useForm from '../../hooks/useForm'
import classnames from 'classnames'
import Col from '../../components/Col'

export default function FormContact() {
    const { success, sendForm, helpers, clearField, loading } = useForm()
    const { t } = useTranslation()
    return (
        <section className="bg-white relative flex justify-center">
            <div
                className="bg-contact-header absolute top-0 w-full bg-cover"
                style={{ height: '535px' }}
            />
            <div className="bg-transparent relative z-2 w-full lg:w-4/5 mt-64 mb-16 px-8 lg:px-0">
                {!success && (
                    <form
                        name="contact"
                        method="post"
                        data-netlify="true"
                        onSubmit={sendForm}
                        className="bg-white px-8 lg:px-4 pb-12 pt-14 border-2"
                    >
                        <div className="flex justify-center flex-col mx-auto sm:max-w-xl">
                            <h3 className="text-subtle text-3xl font-sofia-bold text-center mb-4">
                                Hablemos
                            </h3>
                            <p className="font-light text-subtle font-sans text-base mb-12 text-center">
                                Permítenos conocerte y saber que andas haciendo
                            </p>
                            <Col cols="1" gap={12} className="sm:grid-cols-2">
                                <div className="w-full">
                                    <label className="label-form">
                                        Mi nombre es
                                    </label>
                                    <Input
                                        placeholder={t('Name')}
                                        name="name"
                                        helper={helpers.name}
                                        onFocus={() => clearField('name')}
                                    />
                                </div>
                                <div className="w-full">
                                    <label className="label-form">
                                        Mi correo electrónico es
                                    </label>
                                    <Input
                                        placeholder="ejemplo@mail.com"
                                        name="email"
                                        helper={helpers.email}
                                        onFocus={() => clearField('email')}
                                    />
                                </div>
                                <div className="w-full">
                                    <label className="label-form">
                                        Estoy trabajando en
                                    </label>
                                    <Input
                                        placeholder="Empresa, Institucion o Startup"
                                        name="work"
                                        helper={helpers.name}
                                    />
                                </div>
                                <div className="w-full">
                                    <label className="label-form">
                                        Mi cargo es
                                    </label>
                                    <Input
                                        placeholder="Jefe de Ventas, RRHH, etc"
                                        name="email"
                                        helper=""
                                        onFocus={() => clearField('email')}
                                    />
                                </div>
                            </Col>
                            <label className="label-form mt-2">
                                Cuéntanos que tienes en mente
                            </label>
                            <TextArea
                                name="motivo"
                                placeholder="Cuéntanos tus motivos, consultas, idea de proyecto ... ¡Queremos ayudarte!"
                                helper={helpers.motivo}
                                onFocus={() => clearField('motivo')}
                            />

                            <div className="flex justify-center">
                                <Button
                                    type="submit"
                                    className={classnames(
                                        { loading, disabled: loading },
                                        'px-8 mt-10 sm:w-auto'
                                    )}
                                >
                                    Enviar
                                </Button>
                            </div>
                        </div>
                    </form>
                )}
                {success && <SectionSuccess t={t} />}
            </div>
        </section>
    )
}
