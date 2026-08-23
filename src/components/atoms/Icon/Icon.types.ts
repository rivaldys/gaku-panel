export type IconName =
    | 'bell'
    | 'chat'
    | 'check-circle'
    | 'chevron-down'
    | 'chevron-left'
    | 'chevron-right'
    | 'cloud-arrow-up'
    | 'cog'
    | 'collection'
    | 'document-text'
    | 'home'
    | 'logout'
    | 'music-note'
    | 'pencil'
    | 'photograph'
    | 'plus'
    | 'sparkles'
    | 'template'
    | 'trash'
    | 'user'
    | 'users'
    | 'view-grid'
    | 'x-circle'
    | 'x-mark'
    | 'x'

export interface SvgIconProps {
    className?: string
    width: number
    height: number
    color: string
    variant?: string
}

export interface IconProps {
    className?: string
    name?: IconName
    size?: number
    width?: number
    height?: number
    color?: string
    variant?: string
}
