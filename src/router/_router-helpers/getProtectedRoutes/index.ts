import type { Route } from 'gaku/types'

const getProtectedRoutes = (routes: Route[]) =>
{
    let protectedRoutes: string[] = []

    routes.forEach((route) =>
    {
        if(route.meta && route.meta.isProtectedRoute)
        {
            if(route && route.path) protectedRoutes.push(route.path)

            if(route.children)
            {
                route.children.forEach((childRoute) =>
                {
                    if(childRoute && childRoute.path)
                    {
                        protectedRoutes.push(childRoute.path)
                    }
                })
            }
        }
    })

    return protectedRoutes
}

export default getProtectedRoutes