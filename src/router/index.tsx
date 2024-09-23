import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routeMapper } from './_router-helpers'
import routes from './routes'

const browserRouter = createBrowserRouter(routeMapper(routes))

const Router = () => <RouterProvider router={browserRouter} />

export { Router, routes }