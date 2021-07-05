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
        <section style={{ height: '1015px' }} className="bg-white relative">
            <div className="h-2/4 bg-contact-form bg-center" />
            <div className="bg-transparent absolute top-0 w-full h-full flex justify-center items-end">
                {!success && (
                    <form
                        name="contact"
                        method="post"
                        data-netlify="true"
                        onSubmit={sendForm}
                        className="bg-white px-4 py-8 mb-10 w-11/12 sm:max-w-5xl sm:w-4/5 sm:py-14"
                    >
                        <div className="flex justify-center flex-col mx-auto sm:max-w-xl">
                            <h3 className="text-subtle font-bold text-3xl font-sofia text-center mb-4">
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
                                    <label className="label-form">Email</label>
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
                                        'w-full px-8 mt-8 sm:w-auto'
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
