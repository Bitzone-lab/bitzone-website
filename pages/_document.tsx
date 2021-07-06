import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html style={{ scrollBehavior: 'smooth' }}>
                <Head />
                <body style={{ margin: '0' }}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
