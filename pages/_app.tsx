import type { AppProps } from 'next/app'
import '../styles/tailwind.css'
import '../styles/about-hero.css'
import '../utilities/i18n'

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
