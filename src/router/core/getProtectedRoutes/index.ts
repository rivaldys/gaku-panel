import type { Route } from 'gaku/shared/types'

const getProtectedRoutes = (routes: Route[]): string[] =>
{
    return routes.flatMap(route => {
        if (!route.meta?.isProtectedRoute) return []

        const selfPath = route.path ? [route.path] : []
        const childPaths = route.children?.map(c => c.path).filter(Boolean) as string[] ?? []

        return [...selfPath, ...childPaths]
    })
}

export default getProtectedRoutes