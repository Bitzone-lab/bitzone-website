import classnames from 'classnames'

export interface PropsWrapperImage {
    src: string
    srcActive?: string
    active?: boolean
    onClick: (ev: any) => void
}

export default function WrapperImage({
    src,
    srcActive,
    active = false,
    onClick
}: PropsWrapperImage) {
    return (
        <div
            onClick={onClick}
            className={classnames('wrapper-image-why-whe rounded-md relative', {
                'border-dashed': !active,
                'cursor-pointer': !active,
                'border-solid': active,
                'border-2': !active,
                'border-0': active
            })}
        >
            <div
                className={classnames(
                    'absolute w-full h-full active-wrapper-image-why-whe rounded-md z-0 opacity-0 transition duration-300',
                    {
                        'opacity-100': active
                    }
                )}
            />
            <img
                src={active ? srcActive : src}
                className="w-40 relative z-10"
            />
        </div>
    )
}
