import classnames from 'classnames'

export interface PropsWrapperImage {
    src: string
    active?: boolean
    onClick: (ev: any) => void
}

export default function WrapperImage({
    src,
    active = false,
    onClick
}: PropsWrapperImage) {
    return (
        <div
            onClick={onClick}
            className={classnames('wrapper-image-why-whe rounded-sm relative', {
                'border-dashed': !active,
                'cursor-pointer': !active,
                'border-solid': active
            })}
        >
            <div
                className={classnames(
                    'absolute w-full h-full active-wrapper-image-why-whe z-0 opacity-0 transition duration-300',
                    {
                        'opacity-100': active
                    }
                )}
            />
            <img src={src} className="w-40 relative z-10" />
        </div>
    )
}
