import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import encode from '../utilities/encode'
import { emailIsValid } from '../utilities/inputValid'

export default function useForm() {
    const { t } = useTranslation()
    const [state, setState] = useState({
        success: false,
        helpers: {
            name: '',
            email: '',
            work: '',
            position: '',
            motivo: ''
        },
        loading: false
    })
    interface Data {
        name: string
        email: string
        work: string
        position: string
        motivo: string
    }

    function sendForm(ev: any) {
        ev.preventDefault()
        const form = ev.target

        const data: Data = {
            name: form.name.value,
            email: form.email.value,
            work: form.work.value,
            position: form.position.value,
            motivo: form.motivo.value
        }

        const helpers: Record<string, string> = {}

        if (data.name === '') {
            helpers.name = t('The name is required')
        }

        if (!emailIsValid(data.email)) {
            helpers.email = t('It is not a valid email')
        }

        if (data.email === '') {
            helpers.email = t('Email is required')
        }

        if (data.work === '') {
            helpers.work = t('Write where you are working')
        }

        if (data.position === '') {
            helpers.position = t('Write your position')
        }

        if (data.motivo === '') {
            helpers.motivo = t('Write a reason')
        }

        if (Object.values(helpers).length > 0) {
            setState({ ...state, helpers: { ...state.helpers, ...helpers } })
            return
        }
        setState({ ...state, loading: true })
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': ev.target.getAttribute('name'),
                ...data
            })
        })
            .then(() => setState({ ...state, success: true, loading: false }))
            .catch(() => setState({ ...state, loading: false }))
    }

    function clearField(name: keyof Data) {
        setState({ ...state, helpers: { ...state.helpers, [name]: '' } })
    }

    return {
        sendForm,
        clearField,
        ...state
    }
}
