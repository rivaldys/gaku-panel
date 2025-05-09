import { ReactNode, Suspense } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

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

const AppLayout = ({ children }: AppLayoutProps) =>
{
    return (
        <HelmetProvider>
            <Helmet>
                <title>Gaku Panel &#8211; Panel to manage Japanese music/song data</title>
            </Helmet>

            <Suspense fallback={<div>Loading...</div>}>
                {children}
            </Suspense>
        </HelmetProvider>
    )
}

export default AppLayout