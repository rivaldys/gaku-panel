import axios from 'axios'
import { ADD_ARTIST, isAccessTokenExpired, refreshTheToken, setFail, setLoading, setSuccess } from '../../../../utils'

const addArtistAction = (req, res) =>
{
    if(isAccessTokenExpired()) refreshTheToken()

    return dispatch =>
    {
        const formData = new FormData()
        
        formData.append('artist_name', req.artist_name)
        formData.append('description', req.description)
        formData.append('photo', req.photo[0] && req.photo[0].file)

        dispatch(setLoading(ADD_ARTIST.ATTEMPT))

        axios({
            method: 'POST',
            url: `/artist`,
            headers: { 'Content-Type': 'multipart/form-data' },
            data: formData
        })
        .then(result =>
        {
            dispatch(setSuccess(ADD_ARTIST.SUCCEED, result.data.message))
            if(res && res.succeed) res.succeed(result.data.message)
        })
        .catch(error =>
        {
            console.log('Error:', error.response)
            dispatch(setFail(ADD_ARTIST.FAILED, error.response.data.errors))
            if(res && res.failed) res.failed(error.response.data)
        })
    }
}

export default addArtistAction