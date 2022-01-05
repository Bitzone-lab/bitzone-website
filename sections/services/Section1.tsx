import classNames from 'classnames'
import { useRouter } from 'next/router'
import styles from './css/section1.module.css'

export default function Section1() {
    return (
        <section className="flex">
            <Item
                title="ING"
                description="Ingeniería de Software"
                to="/services/ing"
                imgName="ing"
            />
            <Item
                title="IA"
                description="Inteligencia Artificial"
                to="/services/ia"
                imgName="ia"
            />
            <Item
                title="CLOUD"
                description="Cloud computing"
                to="/services/cloud"
                imgName="cloud"
            />
        </section>
    )
}

function Item({ title, description, to, imgName }: ItemProps) {
    const router = useRouter()

    return (
        <div
            className={classNames(
                `service-bg xl:w-1/3 bg-service-${imgName} relative`,
                {
                    [styles['service-section1']]: true
                }
            )}
            style={{ height: '454px' }}
            onClick={() => router.push(to)}
        >
            <div
                className={classNames(
                    'bg-black w-full h-full absolute transition-opacity',
                    {
                        [styles.shape]: true
                    }
                )}
            ></div>
            <div className="text-center relative z-10">
                <p className="title-service">{title}</p>
                <p className="subtitle-service">{description}</p>
            </div>
        </div>
    )
}

interface ItemProps {
    title: string
    description: string
    to: string
    imgName: string
}
