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
            style={right ? { right: '5%' } : { left: '5%' }}
            className={classnames(
                'w-10 rounded-full bg-white absolute h-10 top-1/2 items-center justify-center cursor-pointer hidden xl:flex',
                className
            )}
            onClick={onClick}
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
        <>
            {children}
            <Arrow onClick={onLeft} className="" />
            <Arrow onClick={onRight} right />
        </>
    )
}
