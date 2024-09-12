import { cva } from 'class-variance-authority'
import { useIntersectionObserver } from 'gaku/hooks'
import type { HTMLProps } from 'react'
import { useEffect, useRef, useState } from 'react'

interface ImageProps extends HTMLProps<HTMLImageElement> {
    classNames?: { img: string }
    preload?: string
    transitionDuration?: number
}

const imageWrapperStyle = cva('overflow-hidden')

const Image = ({ className, classNames, src, preload, alt, transitionDuration }: ImageProps) =>
{
    const [imageSrc, setImageSrc] = useState(preload ? preload : src)
    const [currentBlur, setCurrentBlur] = useState(preload ? 'blur-md' : 'blur-none')
    const imageRef = useRef(null)

    const inView = useIntersectionObserver({ ref: imageRef })
    const imageStyle = (classNames && classNames.img) ? ` ${classNames.img}` : ''
    
    useEffect(() =>
    {
        if(preload)
        {
            if(inView)
            {
                setImageSrc(src)
                setCurrentBlur('blur-none')
            }
        }
    }, [inView, src, preload])

    return (
        <div className={imageWrapperStyle({ className })}>
            <img
                className={`w-full h-full object-cover object-center transition ${transitionDuration ? 'duration-[' + transitionDuration + ']' : 'duration-1000'} bg-gray-200 ${currentBlur}${imageStyle}`}
                ref={imageRef}
                src={imageSrc}
                alt={alt}
            />
        </div>
    )
}

export default Image