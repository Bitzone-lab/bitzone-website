import Head from 'next/head'

interface PropsPageHead {
    title: string
    description: string
    image: string
}

export default function PageHead({ title, description, image }: PropsPageHead) {
    return (
        <Head>
            <title>{title}</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <meta property="og:title" content={description} key="title" />
            <meta
                name="keywords"
                content="Technology, Community, Artificial Intelligence, Cloud, Software Engineering"
            />
            <meta name="image" content={image} />
        </Head>
    )
}
