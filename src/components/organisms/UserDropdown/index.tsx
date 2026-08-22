import { Avatar, Icon } from 'gaku/components'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'

export default function UserDropdown()
{
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if(dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    const toggleDropdown = () => setIsDropdownOpen(prev => !prev)

    const logoutHandler = () => {
        // TODO: logout logic
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                id="user-menu-button"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
                aria-controls="user-menu"
                type="button"
                onClick={toggleDropdown}
                className="flex items-center hover:cursor-pointer"
            >
                <div className="text-right mr-[10px]" aria-hidden="true">
                    <p className="font-medium text-sm text-[#757575]">Full Name</p>
                    <p className="font-light text-xs text-[#999999]">Account Level</p>
                </div>

                <Avatar className="mr-[5px]" />
                <Icon name="chevron-down" size={15} color="#cccccc" />
                <span className="sr-only">Open user menu</span>
            </button>

            {isDropdownOpen && (
                <ul
                    id="user-menu"
                    role="menu"
                    aria-labelledby="user-menu-button"
                    className="absolute right-[2px] mt-[5px] py-2 w-[200px] flex flex-col text-sm text-[#757575] rounded-lg bg-white shadow"
                >
                    <li role="menuitem">
                        <Link
                            className="flex items-center px-[15px] py-[8px] transition-all hover:bg-red-50/70 hover:pl-[20px]"
                            to="/"
                        >
                            <Icon name="user" size={18} />
                            <span className="ml-[10px]">Account Setting</span>
                        </Link>
                    </li>
                    <li role="menuitem">
                        <button
                            className="w-full flex items-center px-[15px] py-[8px] transition-all hover:bg-red-50/70 hover:pl-[20px] hover:cursor-pointer"
                            type="button"
                            onClick={logoutHandler}
                        >
                            <Icon name="logout" size={18} />
                            <span className="ml-[10px]">Logout</span>
                        </button>
                    </li>
                </ul>
            )}
        </div>
    )
}
