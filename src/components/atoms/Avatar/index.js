import { ILAvatar } from '../../../assets'

const Avatar = ({ className, src, alt }) =>
{
    const customStyles = className ? ` ${className}` : ''

    return (
        <img
            className={`w-10 h-10 rounded-[10px]${customStyles}`}
            src={src ? src : ILAvatar}
            alt={alt ? alt : 'Avatar'}
        />
    )
}

export default Avatar