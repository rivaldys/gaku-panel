import axios from 'axios'
import { AppDispatch } from 'gaku/services/store'
import { ActionRequest, ActionResponse } from 'gaku/types'
import { browserMind, isAccessTokenExpired, LOGIN, refreshTheToken, setFail, setLoading, setSuccess } from 'gaku/utils'

const logoutAction = (req: ActionRequest, res: ActionResponse) =>
{
    if(isAccessTokenExpired()) refreshTheToken()
    const refreshToken = browserMind.remember('refresh_token')

    return (dispatch: AppDispatch) =>
    {
        dispatch(setLoading(LOGIN.ATTEMPT))

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
            browserMind.forget('refresh_token')
            browserMind.forget('logged_in_user')
            browserMind.forget('access_token_expiration')
            dispatch(setSuccess(LOGIN.SUCCEED, result.data.message))
            if(res && res.succeed) res.succeed()
        })
        .catch(error =>
        {
            console.log('Error:', error.response)
            dispatch(setFail(LOGIN.FAILED, error.response.data.errors))
            if(res && res.failed) res.failed()
        })
    }
}

export default logoutAction