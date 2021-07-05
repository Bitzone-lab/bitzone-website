import Button from '../Button'
import Icon from '../Icon'
import classnames from 'classnames'

export interface Content {
    title: string
    subtitle: string
    textarea: string
    link: string
    image: string
}

interface ArrowProps {
    className?: string
    right?: boolean
}

function Arrow({ className = '', right = false }: ArrowProps) {
    return (
        <div
            style={right ? { right: '5%' } : { left: '5%' }}
            className={classnames(
                'w-10 rounded-full bg-white absolute h-10 top-1/2 items-center justify-center cursor-pointer hidden xl:flex',
                className
            )}
        >
            <Icon
                name={right ? 'right' : 'left'}
                color="#00007A"
                size={15}
                className={right ? 'ml-1' : 'mr-1'}
            />
        </div>
    )
}

export default function Carousel(props: { content: Content[] }) {
    return (
        <section className="relative cut-top -mt-40">
            <div className="w-full full-screen--40 carousel xl:h-auto">
                {props.content.map((data, i) => (
                    <div
                        key={i}
                        className="w-full carousel-item h-full relative items-center"
                    >
                        <img
                            src={data.image}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute w-full px-5 text-white top-0">
                            <div className="max-w-5xl w-full mx-auto mt-8 xl:mt-16">
                                <h3 className="text-2xl px-4">
                                    Somos equipo, somos Bitzone
                                </h3>
                            </div>
                        </div>
                        <div className="absolute w-full px-5 text-white">
                            <div className="max-w-5xl w-full mx-auto">
                                <div className="xl:w-2/4">
                                    <h2 className="font-sofia mb-4 uppercase">
                                        {data.subtitle}
                                    </h2>
                                    <h1 className="text-3xl font-sofia mb-8">
                                        {data.title}
                                    </h1>
                                    <p className="mb-5 text-md">
                                        {data.textarea}
                                    </p>
                                    <Button className="btn-sm">
                                        Descúbrelo
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute px-5 pb-10 bottom-0 z-10 w-full">
                <div className="flex items-center xl:w-full xl:max-w-5xl xl:mx-auto xl:justify-center">
                    {props.content.map((_, i) => (
                        <div
                            key={i}
                            className="rounded-full bg-white h-3 w-3 border-2 border-white mr-3"
                        />
                    ))}
                </div>
            </div>
            <Arrow className="" />
            <Arrow right />
        </section>
    )
}
