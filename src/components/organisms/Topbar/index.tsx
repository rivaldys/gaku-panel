import { Icon, ProfileDropdown } from 'gaku/components'
import { browserMind } from 'gaku/utils'
import type { Ref } from 'react'
import { useNavigate } from 'react-router-dom'

interface TopbarProps {
    profileDropdownRef: Ref<HTMLDivElement>
    isBackButtonActive: boolean
}

const Topbar = ({ profileDropdownRef, isBackButtonActive }: TopbarProps) =>
{
    const loggedInUser = browserMind.remember('logged_in_user')
    const navigate = useNavigate()

    return (
        <header className={`bg-white h-[70px] flex items-center justify-between pl-[30px] pr-[30px] shadow-[0_5px_5px_-5px_rgba(128,128,128,0.3)]`}>
            <button
                className={`${isBackButtonActive ? 'bg-white' : 'bg-gray-200'} border border-[#eaeaea] rounded-full p-2`}
                type="button"
                onClick={() => navigate(-1)}
                title={isBackButtonActive ? 'Go back' : 'Disabled'}
                disabled={isBackButtonActive ? false : true}
            >
                <Icon name="chevron-left" />
            </button>

            <ProfileDropdown
                ref={profileDropdownRef}
                name={loggedInUser && loggedInUser.fullname}
                desc={loggedInUser && loggedInUser.account_type}
            />
        </header>
    )
}

export default Topbar