import classNames from 'classnames'
import { PropsCol } from './types'

export default function Col({
    children,
    className = '',
    cols = '2',
    gap = 4
}: PropsCol) {
    return (
        <div
            className={classNames(
                `grid grid-cols-${cols} gap-${gap}`,
                className
            )}
        >
            {children}
        </div>
    )
}
