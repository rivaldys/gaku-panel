import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routeMapper } from './_router-helpers'
import routes from './routes'

const browserRouter = createBrowserRouter(routeMapper(routes))

function Router()
{
    return (
        <RouterProvider router={browserRouter} />
    )
}

export { Router, routes }