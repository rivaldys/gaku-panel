import { IconProps } from 'gaku/shared/types'

export default function IcChevronDown({ className, size, color }: IconProps)
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    )
}