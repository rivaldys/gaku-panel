import axios from 'axios'
import { GET_ARTISTS, isAccessTokenExpired, refreshTheToken, setFail, setLoading, setSuccess } from '../../../../utils'

const getArtistsAction = (req, res) =>
{
    if(isAccessTokenExpired()) refreshTheToken()

    return dispatch =>
    {
        dispatch(setLoading(GET_ARTISTS.ATTEMPT))

        axios({
            method: 'GET',
            url: `/artists`,
            headers: { Accept: 'application/json' }
        })
        .then(result =>
        {
            dispatch(setSuccess(GET_ARTISTS.SUCCEED, result.data))
            if(res && res.succeed) res.succeed()
        })
        .catch(error =>
        {
            console.log('Error:', error.response)
            dispatch(setFail(GET_ARTISTS.FAILED, error.response.data))
            if(res && res.failed) res.failed()
        })
    }
}

export default getArtistsAction