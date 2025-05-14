import { useEffect, useState, useRef } from 'react'
import type { RefObject } from 'react'

type UseIntersectionObserverProps = {
    ref: RefObject<Element | null>
    threshold?: number
}

/**
 * useIntersectionObserver
 * 
 * Custom React hook to observe when a DOM element enters the viewport.
 *
 * @param {Object} props - Hook options
 * @param {RefObject<Element>} props.ref - A React ref to the DOM element to observe
 * @param {number} [props.threshold=0.5] - Intersection threshold (0 to 1)
 * @returns {boolean} Whether the element has intersected the viewport
 *
 * @example
 * const ref = useRef(null)
 * const hasIntersected = useIntersectionObserver({ ref })
 *
 * useEffect(() => {
 *   if (hasIntersected) {
 *     console.log('Element is visible in viewport!')
 *   }
 * }, [hasIntersected])
 */
const useIntersectionObserver = ({ ref, threshold = 0.5 }: UseIntersectionObserverProps): boolean =>
{
    const [hasIntersected, setHasIntersected] = useState(false)
    const observerRef = useRef<IntersectionObserver | null>(null)

    useEffect(() => {
        if(!ref.current || hasIntersected) return

        observerRef.current = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    setHasIntersected(true)
                    observerRef.current?.disconnect()
                }
            },
            { threshold }
        )

        observerRef.current.observe(ref.current)

        return () => {
            observerRef.current?.disconnect()
        }
    }, [ref, threshold, hasIntersected])

    return hasIntersected
}

export default useIntersectionObserver