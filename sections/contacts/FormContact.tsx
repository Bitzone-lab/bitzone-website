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
                                {t('Let’s talk')}
                            </h3>
                            <p className="font-light text-subtle font-sans text-base mb-12 text-center">
                                {t('Let us meet you and...')}
                            </p>
                            <Col cols="1" gap={12} className="sm:grid-cols-2">
                                <div className="w-full">
                                    <label className="label-form">
                                        {t('My name is')}
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
                                        {t('My email is')}
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
                                        {t('I am working on')}
                                    </label>
                                    <Input
                                        placeholder="Empresa, Institucion o Startup"
                                        name="work"
                                        helper={helpers.work}
                                        onFocus={() => clearField('work')}
                                    />
                                </div>
                                <div className="w-full">
                                    <label className="label-form">
                                        {t('My job position is')}
                                    </label>
                                    <Input
                                        placeholder="Jefe de Ventas, RRHH, etc"
                                        name="position"
                                        helper={helpers.position}
                                        onFocus={() => clearField('position')}
                                    />
                                </div>
                            </Col>
                            <label className="label-form mt-2">
                                {t('Tell us what you have in mind')}
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
                                    {t('Send')}
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
