import { JSONValue } from 'gaku/shared/types'
import { cryptor } from 'gaku/shared/utils'

const SECRET_KEY = import.meta.env.VITE_BROWSER_MIND_SECRET_KEY

interface memorizeOptions {
    memory: JSONValue
    protect?: boolean
}

interface rememberOptions {
    protect?: boolean
}

/**
 * browserMind — Lightweight utility to help the browser "remember" things.
 *
 * Provides human-friendly methods for working with localStorage:
 * - `memorize`: Save a value
 * - `remember`: Retrieve a saved value
 * - `forget`: Remove a saved value
 *
 * Supports optional encryption for sensitive data using a shared secret.
 * Set `protect: true` to encrypt or decrypt the stored value.
 * 
 * ⚠️ To enable encryption, define your secret key in a .env file using:
 * `VITE_BROWSER_MIND_SECRET_KEY=your-secret-key`
 *
 * @author Created with a cup of tea by Ahmad Rivaldy S
 * @since 2025
 */
const browserMind = (() =>
{
    /**
     * Stores a value in localStorage under the given key.
     * If protect is true, the value will be encrypted before storing.
     *
     * @param {string} key The key under which the data is stored
     * @param {object} options The memory and protect flag
     * @param {JSONValue} options.memory The actual value to store
     * @param {boolean} [options.protect] If true, encrypts the value before storing
     *
     * @example
     * // Store value without encryption
     * browserMind.memorize("username", { memory: "Alice" })
     *
     * // Store value with encryption
     * browserMind.memorize("username", { memory: "Alice", protect: true })
     */
    const memorize = (key: string, { memory, protect = false }: memorizeOptions) =>
    {
        const toStore = protect
            ? cryptor.seal(memory, SECRET_KEY)
            : JSON.stringify(memory)
        localStorage.setItem(key, toStore)
    }

    /**
     * Retrieves a value from localStorage by key.
     * If protect is true, the value will be decrypted before returning.
     *
     * @param {string} key The key of the stored data
     * @param {object} [options] The protect flag
     * @param {boolean} [options.protect] If true, decrypts the value before returning
     * @returns {JSONValue | null} The parsed value or null if not found
     *
     * @example
     * // Retrieve value without decryption
     * const username = browserMind.remember("username")
     * console.log(username) // Output: "Alice"
     *
     * // Retrieve value with decryption
     * const encryptedUsername = browserMind.remember("username", { protect: true })
     * console.log(encryptedUsername) // Output: "Alice"
     */
    const remember = (key: string, { protect }:  rememberOptions = {}): JSONValue | null =>
    {
        const stored = localStorage.getItem(key)
        if(stored == null) return null
        return protect ? cryptor.unseal(stored, SECRET_KEY) : JSON.parse(stored)
    }
    
    /**
     * Removes a value from localStorage by key.
     *
     * @param {string} key The key to remove from storage
     *
     * @example
     * browserMind.forget("username")
     */
    const forget = (key: string) =>
    {
        localStorage.removeItem(key)
    }

    return { memorize, remember, forget }
})()

export default browserMind