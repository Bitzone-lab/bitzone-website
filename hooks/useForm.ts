import { useState } from 'react'
import encode from '../utilities/encode'
import { emailIsValid } from '../utilities/inputValid'

export default function useForm() {
    const [state, setState] = useState({
        success: false,
        helpers: {
            name: '',
            email: '',
            motivo: ''
        },
        loading: false
    })

    function sendForm(ev: any) {
        ev.preventDefault()
        const form = ev.target
        interface Data {
            name: string
            email: string
            motivo: string
        }

        const data: Data = {
            name: form.name.value,
            email: form.email.value,
            motivo: form.motivo.value
        }

        const helpers: Record<string, string> = {}

        if (data.name === '') {
            helpers.name = 'El nombre es requerido'
        }

        if (!emailIsValid(data.email)) {
            helpers.email = 'No es un correo válido'
        }

        if (data.email === '') {
            helpers.email = 'El correo es requerido'
        }

        if (data.motivo === '') {
            helpers.motivo = 'Escribe un motivo'
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

    function clearField(name: 'name' | 'email' | 'motivo') {
        setState({ ...state, helpers: { ...state.helpers, [name]: '' } })
    }

    return {
        sendForm,
        clearField,
        ...state
    }
}
