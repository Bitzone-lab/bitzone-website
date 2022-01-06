import classNames from 'classnames'
import { PropsCol } from './types'

export default function Col({
    children,
    className = '',
    cols = '2',
    gap = 4,
    gapY = 2
}: PropsCol) {
    return (
        <div
            className={classNames(
                `grid grid-cols-${cols} gap-x-${gap} gap-y-${gapY}`,
                className
            )}
        >
            {children}
        </div>
    )
}
