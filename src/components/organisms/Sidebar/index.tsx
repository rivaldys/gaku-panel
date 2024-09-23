import { Icon } from 'gaku/components'
import { Link } from 'react-router-dom'

interface SidebarDataProps {
    path: string
    name: string
    sidebar: {
        icon: string
    }
}

interface SidebarProps {
    currentPage: string
    data: SidebarDataProps[]
}

const Sidebar = ({ currentPage, data }: SidebarProps) =>
{
    return (
        <nav className="w-[250px] bg-white border-r border-[#f5f5f5]">
            <ul className="mt-[35px]">
                {data.map((item, index) => (
                    <li className="flex mb-[5px]" key={index}>
                        <Link
                            to={item.path}
                            className={`w-[calc(100%-30px)] flex items-center py-3 px-4 rounded-lg ml-[15px] mr-[10px] transition duration-300 hover:bg-red-50 ${currentPage === item.name && 'bg-red-50'}`}
                        >
                            <Icon name={item.sidebar.icon} />
                            <span className="text-sm leading-[21px] text-[#757575] ml-[15px]">{item.name}</span>
                        </Link>

                        {currentPage === item.name
                            ? <div className="w-[5px] bg-[#D66D75] rounded-l-[3px]" />
                            : <div className="w-[5px] bg-transparent" />
                        }
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Sidebar