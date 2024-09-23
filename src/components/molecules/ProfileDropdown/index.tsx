import { Avatar, Icon } from 'gaku/components'
import { logoutAction } from 'gaku/services/actions'
import { useAppDispatch } from 'gaku/utils'
import { forwardRef, useImperativeHandle, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

interface ProfileDropdownProps {
    name: string
    desc: string
    photo?: string
}

const ProfileDropdown = forwardRef(({ name, desc, photo }: ProfileDropdownProps, ref) =>
{
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    useImperativeHandle(ref, () =>
    {
        return {
            hide: () => setIsMenuVisible(false),
            isMenuVisible
        }
    })

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const logoutHandler = () =>
    {
        const res = { succeed: () => navigate('/auth/login') }
        dispatch(logoutAction({}, res))
    }

    return (
        <div className="relative">
            <button
                className="flex items-center"
                onClick={() => setIsMenuVisible(true)}
            >
                <div className="text-right mr-[10px]">
                    <p className="font-medium text-sm text-[#757575]">{name}</p>
                    <p className="font-light text-xs text-[#999999]">{desc}</p>
                </div>
                <Avatar className="mr-[5px]" src={photo} />
                <Icon name="chevron-down" size={15} color="#cccccc" />
            </button>

            {isMenuVisible && (
                <div className="absolute right-[2px] mt-[5px] py-2 w-[200px] flex flex-col text-sm text-[#757575] rounded-lg bg-white shadow">
                    <Link
                        to="/"
                        className="flex items-center px-[15px] py-[8px] transition-all hover:bg-red-50/70 hover:pl-[20px]"
                    >
                        <Icon name="user" size={18} />
                        <span className="ml-[10px]">Account Setting</span>
                    </Link>
                    <p
                        className="flex items-center px-[15px] py-[8px] transition-all hover:bg-red-50/70 hover:pl-[20px] hover:cursor-pointer"
                        onClick={logoutHandler}
                    >
                        <Icon name="logout" size={18} />
                        <span className="ml-[10px]">Logout</span>
                    </p>
                </div>
            )}
        </div>
    )
})

export default ProfileDropdown