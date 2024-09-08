import { Login, NotFound } from 'gaku/pages'

const routes = [
    {
        name: 'Login',
        path: '/',
        element: <Login />,
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