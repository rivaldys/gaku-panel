import type { SvgIconProps } from '../Icon.types'

export default function IcLogout({
    className,
    width,
    height,
    color
}: SvgIconProps) {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 24 24"
            stroke={color}
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
    )
}