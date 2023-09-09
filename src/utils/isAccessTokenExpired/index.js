import { getData } from '../localStorage'

export const isAccessTokenExpired = () =>
{
    /**
     * Prints the date in a readable format, use: new Date(time).toUTCString()
     */
    const currTime = new Date().getTime() // Get the current time in milliseconds
    const tokenExp = getData('access_token_expiration') // The expiration time is stored in milliseconds format

    if(currTime > tokenExp)
    {
        return true
    }
    else
    {
        return false
    }
}