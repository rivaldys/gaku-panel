import type { IconName } from 'gaku/components'
import { ComponentType, LazyExoticComponent } from 'react'
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

export interface Route {
    path?: string
    index?: boolean
    element: LazyExoticComponent<ComponentType<{}>> | string
    children?: Route[]
    meta?: {
        isProtectedRoute?: boolean
        navbar?: string
        redirection?: string
    }
}

export interface RouteComponentProps {
    navigate: ReturnType<typeof useNavigate>
}

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
