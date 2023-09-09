import axios from 'axios'
import { LOGIN, setFail, setLoading, setSuccess, storeData } from '../../../../utils'

const loginAction = (req, res) =>
{
    return dispatch =>
    {
        dispatch(setLoading(LOGIN.ATTEMPT))

        axios({
            method: 'POST',
            url: `/auth/login?account_type=admin`,
            data: req
        })
        .then(result =>
        {
            storeData('refresh_token', result.data.refreshToken)
            storeData('logged_in_user', result.data.loggedInUser)
            storeData('access_token_expiration', result.data.accessTokenExpiration)
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