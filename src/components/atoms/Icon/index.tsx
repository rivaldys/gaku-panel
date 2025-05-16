import type { IconProps } from 'gaku/shared/types'
import {
    IcBell,
    IcChat,
    IcCheckCircle,
    IcChevronDown,
    IcChevronLeft,
    IcChevronRight,
    IcCloudUpload,
    IcCog,
    IcCollection,
    IcDocText,
    IcHome,
    IcLogout,
    IcMusicNote,
    IcPencil,
    IcPhotograph,
    IcPlus,
    IcSparkles,
    IcTemplate,
    IcTrash,
    IcUser,
    IcUsers,
    IcViewGrid,
    IcX,
    IcXCircle
} from 'gaku/assets'

const iconMap = {
    'bell': IcBell,
    'chat': IcChat,
    'check-circle': IcCheckCircle,
    'chevron-down': IcChevronDown,
    'chevron-left': IcChevronLeft,
    'chevron-right': IcChevronRight,
    'cloud-upload': IcCloudUpload,
    'cog': IcCog,
    'collection': IcCollection,
    'document-text': IcDocText,
    'home': IcHome,
    'logout': IcLogout,
    'music-note': IcMusicNote,
    'pencil': IcPencil,
    'photograph': IcPhotograph,
    'plus': IcPlus,
    'sparkles': IcSparkles,
    'template': IcTemplate,
    'trash': IcTrash,
    'user': IcUser,
    'users': IcUsers,
    'view-grid': IcViewGrid,
    'x-circle': IcXCircle,
    'x': IcX
} as const

export type IconName = keyof typeof iconMap

export default function Icon({ name, size, color, variant }: IconProps)
{
    const currentSize = size ? size : 24
    const currentColor = color ? color : '#999999'

    const IconComponent = iconMap[name ?? 'home']
    return <IconComponent size={currentSize} color={currentColor} variant={variant} />
}