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

export type ActionRequest = object | object[]

export interface ActionResponse {
    succeed?: () => void
    failed?: () => void
}