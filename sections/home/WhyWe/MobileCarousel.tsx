import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import Content from './Content'
import NewCarousel from '../../../components/NewCarousel'
import contentImg from '../../../todo/carousel_why_we.json'

export default function WhyWe() {
    const { t } = useTranslation()
    const [index, setIndex] = useState(0)

    function toLeft() {
        setIndex(index === 0 ? 6 : index - 1)
    }

    function toRight() {
        setIndex(index === 6 ? 0 : index + 1)
    }
    return (
        <>
            <article className="px-4 xl:hidden">
                <h2 className="text-tagline font-sofia text-md mb-6 xl:mb-11 xl:mt-24">
                    {t('WHY WE?')}
                </h2>
                <Content t={t} index={index} />
            </article>
            <NewCarousel
                content={contentImg}
                onClickLeft={toLeft}
                onClickRight={toRight}
            />
        </>
    )
}
