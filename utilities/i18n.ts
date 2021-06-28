import languages from '../languages.json'
import i18n, { Resource } from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources: Resource = {}

Object.values(languages).forEach(lngCollection => {
    Object.keys(lngCollection).forEach(lng => {
        resources[lng] = {}
    })
})

Object.keys(resources).forEach(lng => {
    const data: Record<string, string> = {}
    Object.keys(languages).forEach(key => {
        data[key] = languages[key][lng]
    })
    resources[lng] = {
        translation: data
    }
})

i18n.use(initReactI18next).init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
        escapeValue: false
    }
})
