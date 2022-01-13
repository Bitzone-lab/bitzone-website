import type { AppProps } from 'next/app'
import '../styles/fonts.css'
import '../styles/tailwind.css'
import '../styles/about-hero.css'
import '../styles/card-image.css'
import '../utilities/i18n'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function MyApp({ Component, pageProps }: AppProps) {
    const { i18n } = useTranslation()

    useEffect(() => {
        i18n.changeLanguage(getLanguage())
    }, [])

    return <Component {...pageProps} />
}

function getLanguage() {
    const navigatorLng = navigator.language
    if (!localStorage.getItem('lang')) {
        localStorage.setItem('lang', navigatorLng || 'es')
    }

    return localStorage.getItem('lang') as 'es' | 'en'
}
