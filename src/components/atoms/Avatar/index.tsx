import { cva } from 'class-variance-authority'
import { ILAvatar } from 'gaku/images'
import type { ImgHTMLAttributes } from 'react'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {}

const avatarStyle = cva('w-10 h-10 rounded-[10px]')

export default function Avatar({ className, src, alt }: AvatarProps)
{
    return (
        <img
            className={avatarStyle({ className })}
            src={src ? src : ILAvatar}
            alt={alt ? alt : 'Avatar'}
        />
    )
}