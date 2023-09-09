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
} from '../../../assets'

const Icon = ({ name, size, color, variant }) =>
{
    const currentSize = size ? size : '24'
    const currentColor = color ? color : '#999999'

    if(name === 'bell') return <IcBell size={currentSize} color={currentColor} />
    if(name === 'chat') return <IcChat size={currentSize} color={currentColor} />
    if(name === 'check-circle') return <IcCheckCircle size={currentSize} color={currentColor} variant={variant} />
    if(name === 'chevron-down') return <IcChevronDown size={currentSize} color={currentColor} />
    if(name === 'chevron-left') return <IcChevronLeft size={currentSize} color={currentColor} />
    if(name === 'chevron-right') return <IcChevronRight size={currentSize} color={currentColor} />
    if(name === 'cloud-upload') return <IcCloudUpload size={currentSize} color={currentColor} />
    if(name === 'cog') return <IcCog size={currentSize} color={currentColor} />
    if(name === 'collection') return <IcCollection size={currentSize} color={currentColor} />
    if(name === 'document-text') return <IcDocText size={currentSize} color={currentColor} />
    if(name === 'home') return <IcHome size={currentSize} color={currentColor} />
    if(name === 'logout') return <IcLogout size={currentSize} color={currentColor} />
    if(name === 'music-note') return <IcMusicNote size={currentSize} color={currentColor} />
    if(name === 'pencil') return <IcPencil size={currentSize} color={currentColor} />
    if(name === 'photograph') return <IcPhotograph size={currentSize} color={currentColor} />
    if(name === 'plus') return <IcPlus size={currentSize} color={currentColor} />
    if(name === 'sparkles') return <IcSparkles size={currentSize} color={currentColor} />
    if(name === 'template') return <IcTemplate size={currentSize} color={currentColor} />
    if(name === 'trash') return <IcTrash size={currentSize} color={currentColor} />
    if(name === 'user') return <IcUser size={currentSize} color={currentColor} />
    if(name === 'users') return <IcUsers size={currentSize} color={currentColor} />
    if(name === 'view-grid') return <IcViewGrid size={currentSize} color={currentColor} />
    if(name === 'x-circle') return <IcXCircle size={currentSize} color={currentColor} variant={variant} />
    if(name === 'x') return <IcX size={currentSize} color={currentColor} />

    return <IcHome size={currentSize} color={currentColor} />
}

export default Icon