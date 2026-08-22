import type { IconProps } from 'gaku/shared/types'

export default function IcPlus({ className, size, color }: IconProps)
{
    return (
        <svg
            className={className}
            width={size}
            height={size}
            fill="none"
            viewBox="0 0 24 24"
            stroke={color}
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
    )
}