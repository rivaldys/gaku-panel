import type { IconProps } from 'gaku/shared/types'

export default function IcX({ className, size, color }: IconProps)
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    )
}