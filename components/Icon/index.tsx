import Hamburger from './Hamburger'
import ArrowLeft from './ArrowLeft'
import Close from './Close'
import ArrowRight from './ArrowRight'
import ArrowDown from './ArrowDown'
import Shapes from './Shapes'
import Left from './Left'
import Right from './Right'
import Email from './Email'
import Whatsapp from './Whatsapp'

export interface PropsIcon {
    name:
        | 'hamburger'
        | 'arrow-left'
        | 'close'
        | 'arrow-right'
        | 'arrow-down'
        | 'left'
        | 'right'
        | 'shapes'
        | 'email'
        | 'whatsapp'
    pointer?: boolean
    size?: number
    className?: string
    color?: string
    onClick?: (ev: any) => void
}

export default function Icon({
    name,
    size = 15,
    pointer = false,
    color = '#fff',
    ...props
}: PropsIcon) {
    const style = {
        fontSize: `${size}px`,
        ...(pointer && { cursor: 'pointer' })
    }
    const p = { ...props, color, style }

    if (name === 'hamburger') return <Hamburger {...p} />
    if (name === 'arrow-left') return <ArrowLeft {...p} />
    if (name === 'close') return <Close {...p} />
    if (name === 'arrow-right') return <ArrowRight {...p} />
    if (name === 'arrow-down') return <ArrowDown {...p} />
    if (name === 'shapes') return <Shapes {...p} />
    if (name === 'left') return <Left {...p} />
    if (name === 'right') return <Right {...p} />
    if (name === 'email') return <Email {...p} />
    if (name === 'whatsapp') return <Whatsapp {...p} />
    return null
}
