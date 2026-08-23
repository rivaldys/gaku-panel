import type { SvgIconProps } from '../Icon.types'

export default function IcChevronRight({
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
    )
}