import { Artist, Catalog, Login, NotFound, Song } from 'gaku/pages'
import { Navigate, Outlet } from 'react-router-dom'

const routes = [
    {
        name: 'Login',
        path: '/',
        element: <Login />,
        meta: { navbar: undefined }
    },
    {
        name: 'Panel',
        path: '/panel',
        element: <Outlet />,
        children:
        [
            {
                name: 'Panel',
                index: true,
                element: <Navigate to="/" replace />,
                meta: { navbar: undefined }
            },
            {
                name: 'Artists',
                path: `artists`,
                element: <Artist />,
                meta: { navbar: undefined }
            },
            {
                name: 'Catalogs',
                path: `catalogs`,
                element: <Catalog />,
                meta: { navbar: undefined }
            },
            {
                name: 'Songs',
                path: `songs`,
                element: <Song />,
                meta: { navbar: undefined }
            },
        ],
        meta: { navbar: undefined }
    },
    {
        name: '404',
        path: '*',
        element: <NotFound />,
        meta: { navbar: undefined }
    }
]

export default routes