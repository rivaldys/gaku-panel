import { Icon } from 'gaku/components'
import { routes } from 'gaku/router'
import { getNavbarRoutes } from 'gaku/router/core'
import { Link, useLocation } from 'react-router-dom'

const navbarRoutes = getNavbarRoutes(routes)

export default function Sidebar()
{
    const location = useLocation()
    const currentPath = location.pathname

    return (
        <aside
            role="complementary"
            aria-label="Sidebar Navigation"
            className="w-[250px] bg-white border-r border-r-[#f5f5f5]"
            data-role="sidebar"
        >
            <nav className="mt-[35px]">
                <ul>
                    {navbarRoutes.map((route, index) => {
                        const pathSegment = route.path ?? ''
                        const singularSegment = pathSegment.endsWith('s') ? pathSegment.slice(0, -1) : null

                        const isActive = currentPath.includes(`/${pathSegment}`) || (singularSegment && currentPath.includes(`/${singularSegment}`))

                        return (
                            <li className="flex mb-[5px]" key={`nav-item_${index+1}`}>
                                <Link
                                    className={`w-[calc(100%-30px)] flex items-center py-3 px-4 rounded-lg ml-[15px] mr-[10px] transition duration-300 hover:bg-red-50${isActive ? ' bg-red-50' : ''}`}
                                    to={route.path ?? '/'}
                                    aria-current={isActive ? 'page' : undefined}
                                >
                                    <Icon name={route.meta?.navbarIcon} />
                                    <span className="text-sm leading-[21px] text-[#757575] ml-[15px]">{route.name}</span>
                                </Link>

                                <div className={`w-[5px] ${isActive ? 'bg-[#D66D75]' : 'bg-transparent'} rounded-l-[3px]`} />
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    )
}