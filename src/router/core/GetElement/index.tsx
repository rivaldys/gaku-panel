import { AppLayout } from 'gaku/components'
import type { Route, RouteComponentProps } from 'gaku/shared/types'
import { type ComponentType, createElement, type ReactNode, Suspense } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import routes from '../../routes'
import getProtectedRoutes from '../getProtectedRoutes'

const protectedRoutes = getProtectedRoutes(routes)

interface GetElementProps {
    route: Route
}

export default function GetElement({ route }: GetElementProps)
{
    const navigate = useNavigate()

    const isProtectedRoute = protectedRoutes.includes(route.path || '')
    const redirectionPath  = (route.meta && route.meta.redirection) ?? false

    let routeElement: ReactNode

    if(route.element === 'redirection' && redirectionPath)
    {
        routeElement = <Navigate to={redirectionPath} replace />
    }
    else if(route.element === 'route-grouping')
    {
        routeElement = <Outlet />
    }
    else if(typeof route.element === 'function')
    {
        routeElement = createElement(route.element as ComponentType<RouteComponentProps>, { navigate })
    }
    else
    {
        routeElement = null
    }

    return isProtectedRoute ? (
        <AppLayout>{routeElement}</AppLayout>
    ) : (
        <Suspense fallback={<div>Loading...</div>}>{routeElement}</Suspense>
    )
}