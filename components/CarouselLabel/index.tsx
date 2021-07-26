import Icon from '../Icon'
import classnames from 'classnames'
import { ReactNode } from 'react'

interface ArrowProps {
    className?: string
    right?: boolean
    onClick: () => void
}

function Arrow({ className = '', right = false, onClick }: ArrowProps) {
    return (
        <div
            className={classnames(
                'w-10 rounded-full bg-white h-10 top-1/2 items-center justify-center cursor-pointer hidden xl:flex',
                right ? 'ml-14' : 'mr-14',
                className
            )}
            onClick={onClick}
        >
            <Icon name={right ? 'right' : 'left'} color="#00007A" size={15} />
        </div>
    )
}

interface PropsCarousel {
    children: ReactNode
    onLeft?: () => void
    onRight?: () => void
}

export default function Carousel({
    children,
    onLeft = () => null,
    onRight = () => null
}: PropsCarousel) {
    return (
        <div className="flex items-center justify-center">
            {/* <Arrow onClick={onLeft} className="" /> */}
            {children}
            {/* <Arrow onClick={onRight} right /> */}
        </div>
    )
}
