import type { IconProps } from './Icon.types'
import { iconMap } from './iconMap'

export default function Icon({
    className,
    name,
    width,
    height,
    size,
    color,
    variant
}: IconProps) {
    const resolvedWidth = size ?? width ?? 24
    const resolvedHeight = size ?? height ?? 24
    const resolvedColor = color ?? '#999999'

    const IconComponent = name ? iconMap[name] : undefined
    if (!IconComponent) {
        return null
    }

    return (
        <IconComponent
            className={className}
            width={resolvedWidth}
            height={resolvedHeight}
            color={resolvedColor}
            variant={variant}
        />
    )
}
