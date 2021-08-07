import { useState } from 'react'

export default function ItemCarousel({
    img,
    text,
    descriptionBack
}: {
    img: string
    text?: string
    descriptionBack?: string
}) {
    const [show, setShow] = useState(false)
    return (
        <div
            className="shadow-md"
            onClick={() => {
                if (descriptionBack) {
                    setShow(!show)
                }
            }}
        >
            <div
                className={`bg-radial-primary p-8 rounded-md relative flex items-center justify-center h-48 ${
                    show ? 'hidden' : ''
                }`}
            >
                <img src={img} className="h-28 w-28 block" />
                <p className="absolute left-0 top-40 text-white text-sm text-center w-full">
                    {text || ''}
                </p>
            </div>
            {descriptionBack && (
                <div
                    className={`bg-accent rounded-md flex justify-center items-center flex-col p-3 h-48 ${
                        show ? '' : 'hidden'
                    }`}
                >
                    <p className="pb-5 font-sofia text-subtle">{text}</p>
                    <p className="text-sm text-subtle text-center font-overpass-light">
                        {descriptionBack}
                    </p>
                </div>
            )}
        </div>
    )
}
