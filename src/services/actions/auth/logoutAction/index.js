import axios from 'axios'
import { getData, isAccessTokenExpired, LOGOUT, refreshTheToken, removeData, setFail, setLoading, setSuccess } from '../../../../utils'

const logoutAction = (req, res) =>
{
    if(isAccessTokenExpired()) refreshTheToken()
    const refreshToken = getData('refresh_token')

    return dispatch =>
    {
        dispatch(setLoading(LOGOUT.ATTEMPT))

        axios({
            method: 'POST',
            url: `/auth/logout`,
            headers:
            {
                Authorization: `Bearer ${refreshToken}`,
                Accept: 'application/json'
            }
        })
        .then(result =>
        {
            removeData('refresh_token')
            removeData('logged_in_user')
            removeData('access_token_expiration')
            dispatch(setSuccess(LOGOUT.SUCCEED, result.data.message))
            if(res && res.succeed) res.succeed()
        })
        .catch(error =>
        {
            console.log('Error:', error.response)
            dispatch(setFail(LOGOUT.FAILED, error.response.data.errors))
            if(res && res.failed) res.failed()
        })
    }
}

export default logoutAction