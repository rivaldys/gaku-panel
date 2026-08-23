import type { SvgIconProps } from '../Icon.types'

export default function IcX({
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    )
}