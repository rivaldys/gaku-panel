import { IconProps } from 'gaku/types'

const IcChevronLeft = ({ size, color }: IconProps) =>
{
    return (
        <svg
            width={size}
            height={size}
            fill="none"
            viewBox="0 0 24 24"
            stroke={color}
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
    )
}

export default IcChevronLeft