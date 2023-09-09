import { UPDATE_ARTIST } from '../../../../utils/actionType'

const initialState = {
    data: false,
    errors: false,
    isLoading: false
}

const updateArtistReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case UPDATE_ARTIST.ATTEMPT:
            return {
                ...state,
                data: false,
                errors: false,
                isLoading: action.payload.isLoading
            }
        case UPDATE_ARTIST.FAILED:
            return {
                ...state,
                data: false,
                errors: action.payload.errors,
                isLoading: false
            }
        case UPDATE_ARTIST.SUCCEED:
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

export default updateArtistReducer