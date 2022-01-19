import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html style={{ scrollBehavior: 'smooth' }} lang="es">
                <Head>
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                </Head>
                <body style={{ margin: '0' }}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
