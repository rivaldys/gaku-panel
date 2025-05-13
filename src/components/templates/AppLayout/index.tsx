import { type ReactNode, Suspense } from 'react'

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
        <Suspense fallback={<div>Loading...</div>}>
            {children}
        </Suspense>
    )
}