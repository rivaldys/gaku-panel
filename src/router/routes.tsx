/**
 * @fileoverview
 * Application routes configuration for React Router.
 * 
 * Each route must conform to the `Route` type imported from shared/types.
 * Routes can be of type:
 *  - 'page': a normal page route with an element component.
 *  - 'group': a route grouping child routes (no element, but may wrap children).
 *  - 'redirect': a route that automatically redirects to another path.
 * 
 * @example
 * // Simple page route:
 * {
 *     name: 'Login',
 *     path: '/login',
 *     type: 'page',
 *     element: LoginComponent,
 *     meta: {
 *         isProtectedRoute: false,
 *         navbarIcon: 'login-icon'
 *     }
 * }
 * 
 * @example
 * // Group route with children:
 * {
 *     name: 'Panel',
 *     path: '/panel',
 *     type: 'group',
 *     meta: {
 *         isProtectedRoute: true
 *     },
 *     children: [
 *         // child routes here
 *     ]
 * }
 * 
 * @example
 * // Redirect route:
 * {
 *     name: 'Main',
 *     path: '/',
 *     type: 'redirect',
 *     meta: {
 *         redirection: '/auth/login'
 *     }
 * }
 * 
 * @typedef {import('gaku/shared/types').Route} Route
 */
import type { Route } from 'gaku/shared/types'
import { lazy } from 'react'

const Artist = lazy(() => import('../pages/Artist'))
const Catalog = lazy(() => import('../pages/Catalog'))
const Login = lazy(() => import('../pages/Auth/Login'))
const NotFound = lazy(() => import('../pages/NotFound'))
const Song = lazy(() => import('../pages/Song'))

/**
 * List of application routes
 * 
 * @type {Route[]}
 */
const routes: Route[] = [
    {
        name: 'Main',
        path: '/',
        type: 'redirect',
        meta: {
            redirection: '/auth/login'
        }
    },
    {
        name: 'Auth',
        path: '/auth',
        type: 'group',
        meta: {
            isProtectedRoute: false
        },
        children: [
            {
                name: 'AuthIndex',
                index: true,
                type: 'redirect',
                meta: {
                    redirection: '/auth/login'
                }
            },
            {
                name: 'Login',
                path: 'login',
                type: 'page',
                element: Login
            }
        ]
    },
    {
        name: 'Panel',
        path: '/panel',
        type: 'group',
        meta: {
            isProtectedRoute: true
        },
        children: [
            {
                name: 'PanelIndex',
                index: true,
                type: 'redirect',
                meta: {
                    redirection: '/panel/songs'
                }
            },
            {
                name: 'Artists',
                path: 'artists',
                type: 'page',
                element: Artist,
                meta: {
                    navbarIcon: 'sparkles'
                }
            },
            {
                name: 'Catalogs',
                path: 'catalogs',
                type: 'page',
                element: Catalog,
                meta: {
                    navbarIcon: 'collection'
                }
            },
            {
                name: 'Songs',
                path: 'songs',
                type: 'page',
                element: Song,
                meta: {
                    navbarIcon: 'music-note'
                }
            }
        ]
    },
    {
        name: '404',
        path: '*',
        type: 'page',
        element: NotFound,
        meta: {
            isProtectedRoute: false
        }
    }
]

export default routes