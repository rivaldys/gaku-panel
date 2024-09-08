import { Action, InitialState } from 'gaku/types'
import { LOGIN } from 'gaku/utils'

const initialState = {
    data: {},
    errors: false,
    isLoading: false
}

const loginReducer = (state: InitialState = initialState, action: Action) =>
{
    switch(action.type)
    {
        case LOGIN.ATTEMPT:
            return {
                ...state,
                data: false,
                errors: false,
                isLoading: action.payload.isLoading
            }
        case LOGIN.FAILED:
            return {
                ...state,
                data: false,
                errors: action.payload.errors,
                isLoading: false
            }
        case LOGIN.SUCCEED:
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

export default loginReducer