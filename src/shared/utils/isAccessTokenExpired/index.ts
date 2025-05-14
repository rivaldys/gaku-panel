import { browserMind } from 'gaku/shared/utils'

/**
 * isAccessTokenExpired
 * 
 * Checks whether the access token has expired based on the stored expiration time.
 * Returns true if the token is missing or expired.
 * 
 * @author Created with a cup of tea by Ahmad Rivaldy S
 * @since 2025
 */
const isAccessTokenExpired = (): boolean =>
{
    const now = Date.now()
    const expiresAt = Number(browserMind.remember('access_token_expiration'))

    // Determine if the token has expired
    const expired = !expiresAt || now > expiresAt

    // Log for debugging purposes in development environment
    if(import.meta.env.DEV)
    {
        console.debug('[Token Expiry Check]', {
            now,
            expiresAt,
            expired,
            readableNow: new Date(now).toUTCString(),
            readableExpiry: expiresAt ? new Date(expiresAt).toUTCString() : 'N/A'
        })
    }

    return expired
}

export default isAccessTokenExpired