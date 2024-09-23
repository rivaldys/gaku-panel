import { cva } from 'class-variance-authority'
import { useIntersectionObserver } from 'gaku/hooks'
import type { HTMLProps } from 'react'
import { useEffect, useRef, useState } from 'react'

interface ImageProps extends HTMLProps<HTMLImageElement> {
    classNames?: { img: string }
    preload?: string
    variant?: 'default' | 'cover'
}

const imageWrapperStyle = cva('overflow-hidden')
const imageStyle = cva('w-full h-full bg-gray-200 transition duration-500', {
    variants:
    {
        variant:
        {
            default: '',
            cover: 'object-cover object-center'
        }
    },
    defaultVariants:
    {
        variant: 'default'
    }
})

const Image = ({ className, classNames, src, preload, alt, variant }: ImageProps) =>
{
    const [imageSrc, setImageSrc] = useState(preload ? preload : src)
    const [currentBlur, setCurrentBlur] = useState(preload ? 'blur-md' : 'blur-none')
    const imageRef = useRef(null)

    const inView = useIntersectionObserver({ ref: imageRef })
    
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
                className={imageStyle({ className: `${currentBlur}${classNames ? classNames.img : undefined}`, variant })}
                ref={imageRef}
                src={imageSrc}
                alt={alt}
            />
        </div>
    )
}

export default Image