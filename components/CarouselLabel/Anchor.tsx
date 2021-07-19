import classnames from 'classnames'

export interface PropsAnchor {
    size: number
    onClickAnchor?: (index: number) => void
    index?: number
}

export default function Anchor({
    size,
    onClickAnchor = () => null,
    index = 0
}: PropsAnchor) {
    return (
        <div className="px-10 pt-10 bottom-0 z-10 w-full hidden xl:block">
            <div className="flex items-center xl:w-full xl:max-w-5xl xl:mx-auto xl:justify-center">
                {Array.from(Array(Math.ceil(size / 3)).keys()).map((_, i) => (
                    <div
                        key={i}
                        className={classnames(
                            'rounded-full h-3 w-3 border-2 border-primary mr-3 cursor-pointer duration-150',
                            {
                                'bg-primary': i === index
                            }
                        )}
                        onClick={() => onClickAnchor(i)}
                    />
                ))}
            </div>
        </div>
    )
}
