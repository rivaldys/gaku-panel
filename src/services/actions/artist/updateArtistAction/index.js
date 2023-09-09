import axios from 'axios'
import { isAccessTokenExpired, refreshTheToken, setFail, setLoading, setSuccess, UPDATE_ARTIST } from '../../../../utils'

const updateArtistAction = (req, res) =>
{
    if(isAccessTokenExpired()) refreshTheToken()

    return dispatch =>
    {
        const formData = new FormData()
        
        formData.append('artist_name', req.artist_name)
        formData.append('description', req.description)
        formData.append('photo', req.photo[0] && req.photo[0].file)
        formData.append('current_photo_url', req.current_photo_url)
        formData.append('id', req.id)

        dispatch(setLoading(UPDATE_ARTIST.ATTEMPT))

        axios({
            method: 'PUT',
            url: `/artist`,
            headers: { 'Content-Type': 'multipart/form-data' },
            data: formData
        })
        .then(result =>
        {
            dispatch(setSuccess(UPDATE_ARTIST.SUCCEED, result.data.message))
            if(res && res.succeed) res.succeed(result.data.message)
        })
        .catch(error =>
        {
            console.log('Error:', error.response)
            dispatch(setFail(UPDATE_ARTIST.FAILED, error.response.data.errors))
            if(res && res.failed) res.failed(error.response.data)
        })
    }
}

export default updateArtistAction