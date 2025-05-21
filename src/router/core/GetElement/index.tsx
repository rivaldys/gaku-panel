import { AppLayout } from 'gaku/components'
import type { Route, RouteComponentProps } from 'gaku/shared/types'
import { type ComponentType, createElement, Suspense } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

interface GetElementProps {
    route: Route
}

export default function GetElement({ route }: GetElementProps)
{
    const navigate = useNavigate()
    const isProtected = route.meta?.isProtectedRoute ?? false

    if(route.type === 'group')
    {
        return isProtected ? (
            <AppLayout>
                <Outlet />
            </AppLayout>
        ) : (
            <Outlet />
        )
    }

    if(route.type === 'redirect')
    {
        const to = route.meta?.redirection ?? '/'
        return <Navigate to={to} replace />
    }

    if(route.type === 'page')
    {
        const element = createElement(route.element as ComponentType<RouteComponentProps>, { navigate })

        return isProtected ? (
            <AppLayout>{element}</AppLayout>
        ) : (
            <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
        )
    }

    return null
}