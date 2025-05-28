import { Sidebar, Topbar } from 'gaku/components'
import { type ReactNode, Suspense } from 'react'

interface AppLayoutProps {
    children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps)
{
    return (
        <div className="h-screen flex">
            <Sidebar />

            <div className="bg-[#f8f8f8] flex-1 flex flex-col">
                <Topbar />

                <main className="flex-1 p-[30px] overflow-auto my-[5px] mr-[5px] [&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-track]:rounded-md [&::-webkit-scrollbar-track]:bg-[#dedede]/30 [&::-webkit-scrollbar-thumb]:rounded-md [&::-webkit-scrollbar-thumb]:bg-[#E29587]/40">
                    <Suspense fallback={<div className="text-[#555555]">Loading...</div>}>
                        {children}
                    </Suspense>
                </main>
            </div>
        </div>
    )
}