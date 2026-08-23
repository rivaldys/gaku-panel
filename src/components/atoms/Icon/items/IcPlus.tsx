import type { SvgIconProps } from '../Icon.types'

export default function IcPlus({
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
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
    )
}