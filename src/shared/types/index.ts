import type { IconName } from 'gaku/components'
import type { ComponentType, LazyExoticComponent } from 'react'
import { useNavigate } from 'react-router-dom'

declare global {
    interface Window {
        flash: (message?: BusProps['message'], type?: BusProps['type']) => void
    }
}

export type JSONPrimitive = string | number | boolean | null
export type JSONValue = JSONPrimitive | JSONObject | JSONArray

export interface JSONObject {
  [key: string]: JSONValue
}

export interface JSONArray extends Array<JSONValue> {}

export interface BusProps {
    message: string
    type: 'success' | 'warning' | 'error' | null | undefined
    time?: number
}

export interface RouteComponentProps {
    navigate: ReturnType<typeof useNavigate>
}

export type RouteComponent = LazyExoticComponent<ComponentType<{}>>

export type RouteType = 'page' | 'group' | 'redirect'

interface BaseRoute {
    name: string
    path?: string
    index?: true
    meta?: {
        isProtectedRoute?: boolean
        navbarIcon?: IconName
        order?: number
        redirection?: string
    }
}

export interface IndexRoute extends BaseRoute {
    index: true
    type: 'page'
    element: RouteComponent
}

export interface IndexRedirectRoute extends BaseRoute {
    index: true
    type: 'redirect'
}

export interface PageRoute extends BaseRoute {
    type: 'page'
    path: string
    element: RouteComponent
}

export interface GroupRoute extends BaseRoute {
    type: 'group'
    children: Route[]
}

export interface RedirectRoute extends BaseRoute {
    type: 'redirect'
    path: string
}

export type Route = IndexRoute | IndexRedirectRoute | PageRoute | GroupRoute | RedirectRoute

export interface IconProps {
    name?: IconName
    size?: number
    color?: string
    variant?: string
}

export interface CredentialsPayload {
    username: string
    password: string
}
