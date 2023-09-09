export const isAccessTokenExpiredOld = tokenExp =>
{
    try
    {
        // const tokenData = token.split('.')[1]
        // const decodedJWT = JSON.parse(atob(tokenData))
        // const dateNow = new Date()
        // const miliseconds = dateNow.getTime() / 1000

        // if(decodedJWT.exp < miliseconds)
        // {
        //     return true
        // }
        // else
        // {
        //     return false
        // }

        const currTime = new Date().getTime()

        if(currTime > tokenExp)
        {
            return true
        }
        else
        {
            return false
        }
    }
    catch(e)
    {
        return false
    }
}