import { useEffect, useState } from 'react'
import type { RefObject } from 'react'

type UseIntersectionObserverProps = {
    ref: RefObject<Element>
}

export const useIntersectionObserver = ({ ref }: UseIntersectionObserverProps) =>
{
    const [hasIntersected, setHasIntersected] = useState(false)

    const handleIntersect: IntersectionObserverCallback = entries =>
    {
        if(!observer) return

        const isIntersecting = entries[entries.length - 1].isIntersecting

        if(isIntersecting) observer.disconnect()

        setHasIntersected(isIntersecting)
    }

    const [observer] = useState(() => new IntersectionObserver(handleIntersect, { threshold: 0.5 }))

    useEffect(() =>
    {
        if(!observer || !ref.current) return

        if(ref.current) observer.observe(ref.current)

        return () =>
        {
            if(ref.current) observer.unobserve(ref.current)
            
            observer.disconnect()
        }
    }, [ref, observer])

    return hasIntersected
}