import Hamburger from './Hamburger'
import ArrowLeft from './ArrowLeft'
import Close from './Close'
import ArrowRight from './ArrowRight'

export interface PropsIcon {
    name: 'hamburger' | 'arrow-left' | 'close' | 'arrow-right'
    pointer?: boolean
    size?: number
    className?: string
}

export default function Icon({
    name,
    size = 15,
    pointer = false,
    ...props
}: PropsIcon) {
    const style = {
        fontSize: `${size}px`,
        ...(pointer && { cursor: 'pointer' })
    }
    if (name === 'hamburger') return <Hamburger {...props} style={style} />
    if (name === 'arrow-left') return <ArrowLeft {...props} style={style} />
    if (name === 'close') return <Close {...props} style={style} />
    if (name === 'arrow-right') return <ArrowRight {...props} style={style} />
    return null
}
