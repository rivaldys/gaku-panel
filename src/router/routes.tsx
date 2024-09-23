import type { ComponentType, LazyExoticComponent } from 'react'
import { lazy } from 'react'

type RouteComponent = LazyExoticComponent<ComponentType<{}>>

const Artist: RouteComponent = lazy(() => import('../pages/Artist'))
const Catalog: RouteComponent = lazy(() => import('../pages/Catalog'))
const Login: RouteComponent = lazy(() => import('../pages/Auth/Login'))
const NotFound: RouteComponent = lazy(() => import('../pages/NotFound'))
const Song: RouteComponent = lazy(() => import('../pages/Song'))

const routes = [
    {
        name: 'Login',
        path: '/',
        element: Login,
        meta: {
            isProtectedRoute: false,
            navbar: undefined
        }
    },
    {
        name: 'Panel',
        path: '/panel',
        element: 'route-grouping',
        children:
        [
            {
                name: 'Panel',
                index: true,
                element: 'redirection',
                meta: { navbar: undefined, redirection: '/' }
            },
            {
                name: 'Artists',
                path: `artists`,
                element: Artist,
                meta: { navbar: undefined }
            },
            {
                name: 'Catalogs',
                path: `catalogs`,
                element: Catalog,
                meta: { navbar: undefined }
            },
            {
                name: 'Songs',
                path: `songs`,
                element: Song,
                meta: { navbar: undefined }
            },
        ],
        meta: {
            isProtectedRoute: true,
            navbar: undefined
        }
    },
    {
        name: '404',
        path: '*',
        element: NotFound,
        meta: {
            isProtectedRoute: false,
            navbar: undefined
        }
    }
]

export default routes