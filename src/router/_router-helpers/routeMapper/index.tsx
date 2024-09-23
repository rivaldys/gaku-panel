import { Route } from 'gaku/types'
import { RouteObject } from 'react-router-dom'
import GetElement from '../GetElement'

const routeMapper = (routes: Route[]): RouteObject[] =>
{
    return routes.map((route: Route) => route.index ? ({
        index: true,
        element: <GetElement route={route} />
    }) : ({
        path: route.path,
        element: <GetElement route={route} />,
        children: route.children && route.children.length ? routeMapper(route.children) : undefined
    }))
}

export default routeMapper