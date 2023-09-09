import { Link } from 'react-router-dom'
import { Avatar, Icon } from '../../atoms'

const FlatList = ({ photo, title, desc, goToDetail }) => 
{
    return (
        <Link
            className="group flex items-center bg-white p-5 rounded-[10px] drop-shadow-[0_3px_5px_rgba(128,128,128,0.15)] [&:not(:last-child)]:mb-[15px] hover:cursor-pointer hover:border-l-[5px] hover:border-l-white"
            to={goToDetail}
            title="Go to detail"
        >
            <Avatar className="mr-[10px]" src={photo} />
            <div>
                <p className="font-medium text-sm text-[#757575]">{title}</p>
                <p className="font-light text-xs text-[#999999]">{desc}</p>
            </div>
            <div className="absolute right-5 group-hover:right-[15px]">
                <Icon name="chevron-right" size={20} />
            </div>
        </Link>
    )
}

export default FlatList
