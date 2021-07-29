import Head from 'next/head'

interface PropsPageHead {
    title: string
    description: string
}

export default function PageHead({ title, description }: PropsPageHead) {
    return (
        <Head>
            <title>{title}</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <meta property="og:title" content={description} key="title" />
        </Head>
    )
}
