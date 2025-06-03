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

const Admin = lazy(() => import('../pages/Account/Admin'))
const Artist = lazy(() => import('../pages/Artist'))
const Catalog = lazy(() => import('../pages/Catalog'))
const Comment = lazy(() => import('../pages/Comment'))
const Login = lazy(() => import('../pages/Auth/Login'))
const Menu = lazy(() => import('../pages/Menu'))
const NotFound = lazy(() => import('../pages/NotFound'))
const Page = lazy(() => import('../pages/Page'))
const Setting = lazy(() => import('../pages/Setting'))
const Song = lazy(() => import('../pages/Song'))
const SongCreate = lazy(() => import('../pages/Song/create'))

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
                name: 'Accounts',
                path: 'accounts',
                type: 'page',
                element: Admin,
                meta: {
                    navbarIcon: 'users',
                    order: 4
                }
            },
            {
                name: 'Artists',
                path: 'artists',
                type: 'page',
                element: Artist,
                meta: {
                    navbarIcon: 'sparkles',
                    order: 3
                }
            },
            {
                name: 'Catalogs',
                path: 'catalogs',
                type: 'page',
                element: Catalog,
                meta: {
                    navbarIcon: 'collection',
                    order: 2
                }
            },
            {
                name: 'Comments',
                path: 'comments',
                type: 'page',
                element: Comment,
                meta: {
                    navbarIcon: 'chat',
                    order: 7
                }
            },
            {
                name: 'Menus',
                path: 'menus',
                type: 'page',
                element: Menu,
                meta: {
                    navbarIcon: 'view-grid',
                    order: 6
                }
            },
            {
                name: 'Pages',
                path: 'pages',
                type: 'page',
                element: Page,
                meta: {
                    navbarIcon: 'template',
                    order: 5
                }
            },
            {
                name: 'Settings',
                path: 'settings',
                type: 'page',
                element: Setting,
                meta: {
                    navbarIcon: 'cog',
                    order: 8
                }
            },
            {
                name: 'Songs',
                path: 'songs',
                type: 'page',
                element: Song,
                meta: {
                    navbarIcon: 'music-note',
                    order: 1
                }
            },
            {
                name: 'SongAlias',
                path: 'song',
                type: 'group',
                children: [
                    {
                        name: 'SongAliasIndex',
                        index: true,
                        type: 'redirect',
                        meta: {
                            redirection: '/panel/songs'
                        }
                    },
                    {
                        name: 'Add New Song',
                        path: 'create',
                        type: 'page',
                        element: SongCreate
                    },
                ]
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