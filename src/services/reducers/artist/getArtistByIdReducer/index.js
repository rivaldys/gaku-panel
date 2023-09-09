import { GET_ARTIST_BY_ID } from '../../../../utils/actionType'

const initialState = {
    data: false,
    errors: false,
    isLoading: false
}

const getArtistByIdReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case GET_ARTIST_BY_ID.ATTEMPT:
            return {
                ...state,
                data: false,
                errors: false,
                isLoading: action.payload.isLoading
            }
        case GET_ARTIST_BY_ID.FAILED:
            return {
                ...state,
                data: false,
                errors: action.payload.errors,
                isLoading: false
            }
        case GET_ARTIST_BY_ID.SUCCEED:
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

export default getArtistByIdReducer