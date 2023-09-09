import { GET_CATALOG_TYPES } from '../../../../utils/actionType'

const initialState = {
    data: false,
    errors: false,
    isLoading: false
}

const getCatalogTypesReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case GET_CATALOG_TYPES.ATTEMPT:
            return {
                ...state,
                data: false,
                errors: false,
                isLoading: action.payload.isLoading
            }
        case GET_CATALOG_TYPES.FAILED:
            return {
                ...state,
                data: false,
                errors: action.payload.errors,
                isLoading: false
            }
        case GET_CATALOG_TYPES.SUCCEED:
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

export default getCatalogTypesReducer