import { Icon, UserDropdown } from 'gaku/components'
import { useNavigate } from 'react-router-dom'

export default function Topbar()
{
    const navigate = useNavigate()
    const isBackButtonActive = false

    return (
        <header
            aria-label="Page Tools"
            className="bg-white h-[70px] flex items-center justify-between pl-[30px] pr-[30px] shadow-[0_5px_5px_-5px_rgba(128,128,128,0.3)]"
            data-role="page-tools"
        >
            <div className="flex items-center gap-2">
                <button
                    aria-label="Go back"
                    className={`${isBackButtonActive ? 'bg-white' : 'bg-gray-200'} border border-[#eaeaea] rounded-full p-2`}
                    type="button"
                    onClick={() => navigate(-1)}
                    title="Go back"
                    disabled={!isBackButtonActive}
                    aria-describedby={!isBackButtonActive ? "back-disabled-reason" : undefined}
                    data-role="back-button"
                >
                    <Icon name="chevron-left" />
                </button>

                {!isBackButtonActive && (
                    <span id="back-disabled-reason" className="sr-only">
                        Cannot go back, no previous page.
                    </span>
                )}
            </div>

            <UserDropdown />
        </header>
    )
}