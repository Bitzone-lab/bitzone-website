import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html style={{ scrollBehavior: 'smooth' }}>
                <Head>
                    <title>Bitzone</title>
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                    <meta
                        property="og:title"
                        content="Contruye tu futuro con Bitzone"
                        key="title"
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
