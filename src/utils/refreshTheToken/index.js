import axios from 'axios'
import { getData, removeData, storeData } from '../localStorage'

export const refreshTheToken = () =>
{
    const refreshToken = getData('refresh_token')

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
        storeData('refresh_token', result.data.refreshToken)
        storeData('access_token_expiration', result.data.accessTokenExpiration)
        console.log('Successfully fetched new access token and refresh token.')
        setTimeout(() =>
        {
            window.location.reload()
        }, 500)
    })
    .catch(error =>
    {
        console.log('Error:', error.response)
        removeData('refresh_token')
        removeData('logged_in_user')
        removeData('access_token_expiration')
        window.flash('Your session has expired. Please log in again.', 'error')
        setTimeout(() =>
        {
            window.location.replace('/auth/login')
        }, 3000)
    })
}