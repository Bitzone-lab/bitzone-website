import { useEffect, useState } from 'react'

export default function useIntervalCarousel(length: number, ms: number) {
    const [index, setIndex] = useState(0)
    const [interval, pushInterval] = useState<NodeJS.Timeout | null>(null)

    useEffect(() => {
        if (interval) clearInterval(interval)
        const currentInterval = setInterval(() => {
            setIndex(index === length ? 0 : index + 1)
        }, ms)
        pushInterval(currentInterval)
    }, [index])

    function toLeft() {
        setIndex(index === 0 ? length : index - 1)
    }

    function toRight() {
        setIndex(index === length ? 0 : index + 1)
    }

    return {
        index,
        toLeft,
        toRight,
        setIndex
    }
}
