import { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from '../../../utils'

const Image = ({ className, containerClassName, src, preload, alt, transitionDuration }) =>
{
    const [imageSrc, setImageSrc] = useState(preload ? preload : src)
    const [currentBlur, setCurrentBlur] = useState(preload ? 'blur-md' : 'blur-none')
    const imageRef = useRef()

    const inView = useIntersectionObserver({ ref: imageRef })
    const customStyles = className ? ` ${className}` : ''
    const containerCustomStyles = containerClassName ? ` ${containerClassName}` : ''

    
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
        <div className={`overflow-hidden${containerCustomStyles}`}>
            <img
                className={`w-full h-full object-cover object-center transition ${transitionDuration ? 'duration-[' + transitionDuration + ']' : 'duration-1000'} bg-gray-200 ${currentBlur}${customStyles}`}
                ref={imageRef}
                src={imageSrc}
                alt={alt}
            />
        </div>
    )
}

export default Image