import { useEffect, useState } from 'react'

export const useIntersectionObserver = ({ ref }) =>
{
    const [hasIntersected, setHasIntersected] = useState(false)

    const handleIntersect = entries =>
    {
        if(!observer) return

        const isIntersecting = entries[entries.length - 1].isIntersecting

        if(isIntersecting) observer.disconnect()

        setHasIntersected(isIntersecting)
    }

    const [observer] = useState(() => new IntersectionObserver(handleIntersect, { threshold: 0.5 }))

    useEffect(() =>
    {
        if(!observer) return

        if(ref) observer.observe(ref.current)

        return () => observer.disconnect()
    }, [ref, observer])

    return hasIntersected
}