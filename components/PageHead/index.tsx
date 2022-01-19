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
            <meta property="description" content={description} key="title" />
            <meta
                name="keywords"
                content="Technology, Community, Artificial Intelligence, Cloud, Software Engineering"
            />
            <meta name="image" content={image} />
            <meta property="og:title" content={title} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.bitzone.lat/" />
            <meta property="og:image" content={image} />
            <meta property="og:description" content={description} />
        </Head>
    )
}
