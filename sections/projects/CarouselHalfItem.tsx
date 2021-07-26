import Icon from '../../components/Icon'
import classnames from 'classnames'

interface ArrowProps {
    className?: string
    right?: boolean
    onClick: () => void
}

function Arrow({ className = '', right = false, onClick }: ArrowProps) {
    return (
        <div
            style={right ? { right: '5%' } : { left: '5%' }}
            className={classnames(
                'w-10 rounded-full bg-white h-10 top-1/2 items-center justify-center cursor-pointer hidden xl:flex',
                className
            )}
            onClick={onClick}
        >
            <Icon
                name={right ? 'right' : 'left'}
                color="#7F52DD"
                size={15}
                className={right ? 'ml-1' : 'mr-1'}
            />
        </div>
    )
}

export function ContentHalfItem({
    image,
    title,
    subtitle,
    back,
    onLeft,
    textColor,
    onRight
}) {
    return (
        <div
            className={`w-full pt-28 pb-28 carousel-item h-full relative items-center bg-${back} text-${textColor}`}
        >
            <div className="max-w-lg">
                <img className="bg-cover xl:w-full" src={image}></img>
                <div className="text-right">
                    <p className="font-sofia-bold text-4xl mt-8">{title}</p>
                    <p className="font-sofia font-light text-base mt-9 mb-12">
                        {subtitle}
                    </p>
                </div>
                <div className="flex justify-end">
                    <Arrow className="mr-5" right={false} onClick={onLeft} />
                    <Arrow right onClick={onRight} />
                </div>
            </div>
        </div>
    )
}
