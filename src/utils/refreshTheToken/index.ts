import axios from 'axios'
import { browserMind } from 'gaku/utils'

export const refreshTheToken = () =>
{
    const refreshToken = browserMind.remember('refresh_token')

    axios({
        method: 'POST',
        url: `/auth/refresh`,
        headers:
        {
            Authorization: `Bearer ${refreshToken}`,
            Accept: 'application/json'
        }
    })
    .then(result =>
    {
        browserMind.memorize('refresh_token', result.data.refreshToken)
        browserMind.memorize('access_token_expiration', result.data.accessTokenExpiration)
        console.log('Successfully fetched new access token and refresh token.')
        setTimeout(() =>
        {
            window.location.reload()
        }, 500)
    })
    .catch(error =>
    {
        console.log('Error:', error.response)
        browserMind.forget('refresh_token')
        browserMind.forget('logged_in_user')
        browserMind.forget('access_token_expiration')
        window.flash('Your session has expired. Please log in again.', 'error')
        setTimeout(() =>
        {
            window.location.replace('/auth/login')
        }, 3000)
    })
}