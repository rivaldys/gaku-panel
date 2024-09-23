import axios from 'axios'
import { AppDispatch } from 'gaku/services/store'
import { ActionRequest, ActionResponse } from 'gaku/types'
import { browserMind, LOGIN, setFail, setLoading, setSuccess } from 'gaku/utils'

const loginAction = (req: ActionRequest, res: ActionResponse) =>
{
    return (dispatch: AppDispatch) =>
    {
        dispatch(setLoading(LOGIN.ATTEMPT))

        axios({
            method: 'POST',
            url: `/auth/login?account_type=admin`,
            data: req
        })
        .then(result =>
        {
            browserMind.memorize('refresh_token', result.data.refreshToken)
            browserMind.memorize('logged_in_user', result.data.loggedInUser)
            browserMind.memorize('access_token_expiration', result.data.accessTokenExpiration)
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

export default loginAction