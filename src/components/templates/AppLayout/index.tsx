import { Icon } from 'gaku/components'
import { type ReactNode, Suspense } from 'react'
import { Link } from 'react-router-dom'

interface AppLayoutProps {
    children: ReactNode
    pageTitle?: string
    createButton?: {
        destination_path: string
    }
    rootInfo?: {
        name: string
    }
}

export default function AppLayout({ children }: AppLayoutProps)
{
    return (
        <div className="h-screen flex">
            <aside
                role="complementary"
                aria-label="Sidebar Navigation"
                className="w-[250px] bg-white border-r border-r-[#f5f5f5]"
                data-role="sidebar"
            >
                <nav className="mt-[35px]">
                    <ul>
                        <li className="flex mb-[5px]">
                            <Link
                                className={`w-[calc(100%-30px)] flex items-center py-3 px-4 rounded-lg ml-[15px] mr-[10px] transition duration-300 hover:bg-red-50`}
                                to="/panel/songs"
                                aria-current="page" // active page
                            >
                                <Icon name="music-note" />
                                <span className="text-sm leading-[21px] text-[#757575] ml-[15px]">Songs</span>
                            </Link>

                            <div className="w-[5px] bg-[#D66D75] rounded-l-[3px]" />
                        </li>
                    </ul>
                </nav>
            </aside>

            <div className="bg-[#f8f8f8] flex-1 flex flex-col">
                <header
                    aria-label="Page Tools"
                    className="bg-white h-[70px] flex items-center justify-between pl-[30px] pr-[30px] shadow-[0_5px_5px_-5px_rgba(128,128,128,0.3)]"
                    data-role="page-tools"
                >
                    {/*  */}
                </header>

                <main className="flex-1 p-[30px] overflow-auto my-[5px] mr-[5px] [&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-track]:rounded-md [&::-webkit-scrollbar-track]:bg-[#dedede]/30 [&::-webkit-scrollbar-thumb]:rounded-md [&::-webkit-scrollbar-thumb]:bg-[#E29587]/40">
                    <Suspense fallback={<div>Loading...</div>}>
                        {children}
                    </Suspense>
                </main>
            </div>
        </div>
    )
}