import { Breadcrumbs, Button, Sidebar, Title, Topbar } from 'gaku/components'
import { routes } from 'gaku/router'
import { browserMind } from 'gaku/utils'
import { ReactNode, Suspense, useCallback, useEffect, useRef } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'

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

const AppLayout = ({ children, pageTitle, createButton, rootInfo }: AppLayoutProps) =>
{
    // const filteredRoutes = routes.filter(route => route.sidebar)
    // const sortedRoutes = filteredRoutes.sort((a, b) => a.sidebar.order - b.sidebar.order)

    const navigate = useNavigate()
    const profileDropdownRef = useRef()

    // const hideProfileDropdown = () =>
    // {
    //     return profileDropdownRef.current && profileDropdownRef.current.isMenuVisible && profileDropdownRef.current.hide()
    // }

    const isAuthenticated = useCallback(() =>
    {
        const refreshToken = browserMind.remember('refresh_token')
        // if(!refreshToken) navigate('/auth/login')
    }, [navigate])

    useEffect(() =>
    {
        isAuthenticated()
    }, [isAuthenticated])

    return (
        <HelmetProvider>
            <Helmet>
                {/* <title>{rootInfo ? rootInfo.name + ': ' + pageTitle : pageTitle} - Gaku Panel</title> */}
                <title>Gaku Panel</title>
            </Helmet>
            {/* <div className="h-screen flex" onClick={hideProfileDropdown}> */}
            <div className="h-screen flex">
                {/* <Sidebar currentPage={rootInfo ? rootInfo.name : pageTitle} data={sortedRoutes} /> */}
                <div className="bg-[#f8f8f8] flex-1 flex flex-col">
                    {/* <Topbar profileDropdownRef={profileDropdownRef} isBackButtonActive={rootInfo ? true : false} /> */}
                    <main className="flex-1 p-[30px] overflow-auto my-[5px] mr-[5px] [&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-track]:rounded-md [&::-webkit-scrollbar-track]:bg-[#dedede]/30 [&::-webkit-scrollbar-thumb]:rounded-md [&::-webkit-scrollbar-thumb]:bg-[#E29587]/40">
                        <div className="flex justify-between items-center mb-[30px]">
                            {/* <div>
                                <Title text={rootInfo ? rootInfo.name + ': ' + pageTitle : pageTitle} className="mb-[5px]" />
                                <Breadcrumbs paths={rootInfo ? ['Panel', rootInfo.name, pageTitle] : ['Panel', pageTitle]} />
                            </div> */}

                            {/* {createButton && (
                                <Button
                                    title="Add New"
                                    type="button-link"
                                    icon="plus"
                                    href={createButton.destination_path}
                                >
                                    Add New
                                </Button>
                            )} */}
                        </div>
                        
                        <Suspense fallback={<div>Loading...</div>}>
                            {children}
                        </Suspense>
                    </main>
                </div>
            </div>
        </HelmetProvider>
    )
}

export default AppLayout