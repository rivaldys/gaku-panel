import { useHistory } from 'react-router-dom'
import { getData } from '../../../utils'
import { Icon } from '../../atoms'
import { ProfileDropdown } from '../../molecules'

const Topbar = ({ profileDropdownRef, isBackButtonActive }) =>
{
    const loggedInUser = getData('logged_in_user')
    const history = useHistory()

    return (
        <header className={`bg-white h-[70px] flex items-center justify-between pl-[30px] pr-[30px] shadow-[0_5px_5px_-5px_rgba(128,128,128,0.3)]`}>
            <button
                className={`${isBackButtonActive ? 'bg-white' : 'bg-gray-200'} border border-[#eaeaea] rounded-full p-2`}
                type="button"
                onClick={() => history.goBack()}
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