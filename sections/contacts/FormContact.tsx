import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../../components/Button'

export default function FormContact() {
    const [success, setSuccess] = useState(false)
    const { t } = useTranslation()
    return (
        <section style={{ height: '1015px' }} className="bg-white relative">
            <div className="h-2/4 bg-contact-form bg-center" />
            <div className="bg-transparent absolute top-0 w-full h-full flex justify-center items-end">
                {!success && (
                    <form
                        onSubmit={() => setSuccess(true)}
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
                                    <input
                                        type="text"
                                        placeholder={t('Name')}
                                        className="input input-ghost w-full mb-5 text-subtle focus:outline-none  bg-input rounded-none focus-input"
                                    ></input>
                                </div>
                                <div className="sm:w-1/2">
                                    <label className="label-form">Email</label>
                                    <input
                                        type="text"
                                        placeholder="ejemplo@mail.com"
                                        className="input input-ghost w-full mb-5 text-subtle bg-input rounded-none focus:bg-white focus-input"
                                    ></input>
                                </div>
                            </div>
                            <label className="label-form">{t('Reason')}</label>
                            <textarea
                                placeholder={t(
                                    'Tell us your reasons, questions...'
                                )}
                                className="textarea resize-none h-36 textarea-ghost w-full text-subtle bg-input rounded-none focus-input"
                            ></textarea>
                            <div className="flex justify-center">
                                <Button
                                    onClick={() => setSuccess(true)}
                                    className="w-full px-8 mt-8 sm:w-auto"
                                >
                                    Enviar
                                </Button>
                            </div>
                        </div>
                    </form>
                )}
                {success && (
                    <div className="bg-white px-4 py-8 mb-10 w-11/12 sm:max-w-5xl sm:w-9/12 sm:py-14">
                        <div className="mx-auto sm:max-w-xl">
                            <h3 className="text-subtle font-bold text-3xl font-sofia text-center mb-4">
                                {t('¡Cool!')}
                            </h3>
                            <p className="font-light text-subtle font-sans text-base mb-16 text-center">
                                {t('Thank you for taking this first...')}
                            </p>
                            <img
                                className="mx-auto w-64"
                                src="img/success-contact.svg"
                            />
                            <div className="flex justify-center">
                                <Button
                                    onClick={() => setSuccess(false)}
                                    className="w-full mt-16 px-8 sm:w-auto"
                                >
                                    {t('Back to home')}
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
