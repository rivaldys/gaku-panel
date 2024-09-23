import { AppLayout } from 'gaku/components'
import type { Route, RouteComponentProps } from 'gaku/types'
import { ComponentType, createElement, Suspense } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import routes from '../../routes'
import getProtectedRoutes from '../getProtectedRoutes'

const protectedRoutes = getProtectedRoutes(routes)

interface GetElementProps {
    route: Route
}

const GetElement = ({ route }: GetElementProps) =>
{
    const navigate = useNavigate()

    const isProtectedRoute = protectedRoutes.includes(route.path || '')
    const redirectionPath  = (route.meta && route.meta.redirection) ?? false

    const routeElement = route.element === 'route-grouping' ? <Outlet /> : 
                         route.element === 'redirection' && redirectionPath ? <Navigate to={redirectionPath} replace /> : 
                         createElement(route.element as ComponentType<RouteComponentProps>, { navigate })

    return isProtectedRoute ? (
        <AppLayout>{routeElement}</AppLayout>
    ) : (
        <Suspense fallback={<div>Loading...</div>}>{routeElement}</Suspense>
    )
}

export default GetElement