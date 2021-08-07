import { useTranslation } from 'react-i18next'
import Button from '../../components/Button'
import SectionSuccess from './SectionSuccess'
import Input from '../../components/Input'
import TextArea from '../../components/TextArea'
import useForm from '../../hooks/useForm'
import classnames from 'classnames'

export default function FormContact() {
    const { success, sendForm, helpers, clearField, loading } = useForm()
    const { t } = useTranslation()
    return (
        <section className="bg-white relative min-h-screen flex justify-center items-center">
            <div className="h-2/4 bg-contact-form bg-center absolute top-0 w-full" />
            <div className="bg-transparent h-full relative z-2 max-w-3xl lg:w-4/5 shadow-md mx-4 mt-20 mb-4 lg:mx-0">
                {!success && (
                    <form
                        name="contact"
                        method="post"
                        data-netlify="true"
                        onSubmit={sendForm}
                        className="bg-white px-4 pb-10 pt-14"
                    >
                        <div className="flex justify-center flex-col mx-auto sm:max-w-xl">
                            <h3 className="text-subtle text-3xl font-sofia-bold text-center mb-4">
                                {t('Get in contact with us')}
                            </h3>
                            <p className="font-light text-subtle font-sans text-base mb-7 text-center">
                                {t(
                                    'We will respond to you in a maximum of 2 business days'
                                )}
                            </p>
                            <div className="sm:flex sm:gap-7">
                                <div className="sm:w-1/2">
                                    <label className="label-form">
                                        {t('Name')}
                                    </label>
                                    <Input
                                        placeholder={t('Name')}
                                        name="name"
                                        helper={helpers.name}
                                        onFocus={() => clearField('name')}
                                    />
                                </div>
                                <div className="sm:w-1/2">
                                    <label className="label-form">
                                        Correo Electrónico
                                    </label>
                                    <Input
                                        placeholder="ejemplo@mail.com"
                                        name="email"
                                        helper={helpers.email}
                                        onFocus={() => clearField('email')}
                                    />
                                </div>
                            </div>
                            <label className="label-form">{t('Reason')}</label>
                            <TextArea
                                name="motivo"
                                placeholder={t(
                                    'Tell us your reasons, questions...'
                                )}
                                helper={helpers.motivo}
                                onFocus={() => clearField('motivo')}
                            />

                            <div className="flex justify-center">
                                <Button
                                    type="submit"
                                    className={classnames(
                                        { loading, disabled: loading },
                                        'px-8 mt-8 sm:w-auto'
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
