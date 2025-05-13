import { cva } from 'class-variance-authority'
import type { HTMLAttributes } from 'react'

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
    text?: string
}

const titleStyle = cva('text-[#555555] text-[28px] leading-[35px] font-semibold')

export default function Title({ children, className, text }: TitleProps)
{
    return (
        <h1 className={titleStyle({ className })}>{children ? children : text}</h1>
    )
}