import axios from 'axios'
import { GET_ARTIST_BY_ID, isAccessTokenExpired, refreshTheToken, setFail, setLoading, setSuccess } from '../../../../utils'

const getArtistByIdAction = (req, res) =>
{
    if(isAccessTokenExpired()) refreshTheToken()

    return dispatch =>
    {
        dispatch(setLoading(GET_ARTIST_BY_ID.ATTEMPT))

        axios({
            method: 'GET',
            url: `/artist/${req.id}`,
            headers: { Accept: 'application/json' }
        })
        .then(result =>
        {
            dispatch(setSuccess(GET_ARTIST_BY_ID.SUCCEED, result.data))
            if(res && res.succeed) res.succeed(result.data)
        })
        .catch(error =>
        {
            console.log('Error:', error.response)
            dispatch(setFail(GET_ARTIST_BY_ID.FAILED, error.response.data))
            if(res && res.failed) res.failed()
        })
    }
}

export default getArtistByIdAction