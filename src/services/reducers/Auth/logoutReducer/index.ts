import { Action, InitialState } from 'gaku/types'
import { LOGOUT } from 'gaku/utils'

const initialState = {
    data: {},
    errors: false,
    isLoading: false
}

const logoutReducer = (state: InitialState = initialState, action: Action) =>
{
    switch(action.type)
    {
        case LOGOUT.ATTEMPT:
            return {
                ...state,
                data: false,
                errors: false,
                isLoading: action.payload.isLoading
            }
        case LOGOUT.FAILED:
            return {
                ...state,
                data: false,
                errors: action.payload.errors,
                isLoading: false
            }
        case LOGOUT.SUCCEED:
            return {
                ...state,
                data: action.payload.data,
                errors: false,
                isLoading: false
            }
        default:
            return state
    }
}

export default logoutReducer