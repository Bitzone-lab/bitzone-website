import Hamburger from './Hamburger'
import ArrowLeft from './ArrowLeft'
import Close from './Close'

export interface PropsIcon {
    name: 'hamburger' | 'arrow-left' | 'close'
    pointer?: boolean
    size?: number
}

function Icon({ name, size, pointer, ...props }: PropsIcon) {
    const style = {
        fontSize: `${size}px`,
        ...(pointer && { cursor: 'pointer' })
    }
    if (name === 'hamburger') return <Hamburger {...props} style={style} />
    if (name === 'arrow-left') return <ArrowLeft {...props} style={style} />
    if (name === 'close') return <Close {...props} style={style} />
    return null
}

Icon.deafultProps = {
    size: 15,
    pointer: false
}

export default Icon
