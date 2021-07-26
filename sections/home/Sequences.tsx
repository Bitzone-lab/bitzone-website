import { useEffect, useState } from 'react'
import pictures from '../../todo/hero_picture.json'

export default function Sequences() {
    const [figure, setFigure] = useState(0)
    const changePictures = () => {
        setFigure(f => {
            if (f === pictures.length - 1) {
                return 0
            }
            return f + 1
        })
    }
    useEffect(() => {
        const intervalPictures = setInterval(() => {
            changePictures()
        }, 1000)
        return () => {
            clearInterval(intervalPictures)
        }
    }, [])
    return (
        <div className="px-6 py-2 hidden h-3/5 xl:w-3/6 xl:flex xl:flex-wrap xl:content-center">
            {pictures[figure].map((turnOn, index) => (
                <div
                    key={index}
                    className={`h-11 bg-accent w-11 mx-1 my-1 opacity-70 ${
                        turnOn ? 'visible' : 'invisible'
                    } animate-pulse`}
                ></div>
            ))}
        </div>
    )
}
