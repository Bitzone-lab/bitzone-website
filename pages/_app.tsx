import type { AppProps } from 'next/app'
import '../styles/fonts.css'
import '../styles/tailwind.css'
import '../styles/about-hero.css'
import '../styles/card-image.css'
import '../utilities/i18n'

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
