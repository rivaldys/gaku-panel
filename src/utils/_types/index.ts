declare global {
    interface Window {
        flash: (message?: BusProps['message'], type?: BusProps['type']) => void
    }
}

export interface BusProps {
    message: string
    type: 'success' | 'warning' | 'error' | null | undefined
    time?: number
}

export interface IconProps {
    name?: string
    size?: number
    color?: string
    variant?: string
}

export interface Action {
    type: string
    payload: {
        data: object | Array<object>
        errors: boolean | object
        isLoading: boolean
    }
}

export interface InitialState {
    data: object | Array<object>,
    errors: boolean | object,
    isLoading: boolean
}

export interface ErrorState {
    [key: string]: any
}

export type ActionRequest = object | object[]

export interface ActionResponse {
    succeed?: () => void
    failed?: () => void
}