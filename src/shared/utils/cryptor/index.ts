import CryptoJS from 'crypto-js'
import type { JSONValue } from 'gaku/shared/types'

/**
 * cryptor — Utility for securely sealing and unsealing data.
 *
 * Provides simple AES-based encryption and decryption for any JSON-compatible data.
 * Useful for protecting sensitive values stored in browser storage or transmitted over the network.
 *
 * Methods:
 * - seal: Encrypts and stringifies the input
 * - unseal: Decrypts and parses the original input
 *
 * @author Created with a cup of tea by Ahmad Rivaldy S
 * @since 2025
 */
const cryptor = (() =>
{
    /**
     * Encrypts data using AES.
     * The data will be converted to a string and then encrypted using the provided key.
     * 
     * @param {JSONValue} data The data to be encrypted (can be any JSON-compatible value)
     * @param {string} secret The secret key for encryption
     * @returns {string} The encrypted string
     * 
     * @example
     * const secretKey = "my-secret-key"
     * const encryptedData = cryptor.seal({ name: "Alice", age: 30 }, secretKey)
     * console.log(encryptedData) // Output: encrypted string
     */
    const seal = (data: JSONValue, secret: string): string =>
    {
        const stringData = JSON.stringify(data)
        return CryptoJS.AES.encrypt(stringData, secret).toString()
    }

    /**
     * Decrypts data that has been encrypted using AES.
     * The encrypted string will be converted back to the original data using the provided key.
     * 
     * @param {string} encrypted The encrypted data
     * @param {string} secret The secret key for decryption
     * @returns {JSONValue} The decrypted data
     * 
     * @example
     * const secretKey = "my-secret-key"
     * const decryptedData = cryptor.unseal(encryptedData, secretKey)
     * console.log(decryptedData) // Output: { name: "Alice", age: 30 }
     */
    const unseal = (encrypted: string, secret: string): JSONValue =>
    {
        const bytes = CryptoJS.AES.decrypt(encrypted, secret)
        const decrypted = bytes.toString(CryptoJS.enc.Utf8)
        return decrypted ? JSON.parse(decrypted) : null
    }

    return { seal, unseal }
})()

export default cryptor