import type { CredentialsPayload } from 'gaku/shared/types'
import { axiosInstance } from './axiosInstance'

export const loginUser = (credentials: CredentialsPayload) => axiosInstance.post('/auth/login', credentials)
export const logoutUser = () => axiosInstance.post('/auth/logout')
