import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authService } from 'gaku/services/api'
import { CredentialsPayload } from 'gaku/shared/types'

interface AuthState {
    token: string | null
    loading: boolean
    error: string | null
}

const initialState: AuthState = {
    token: null,
    loading: false,
    error: null
}

export const login = createAsyncThunk('auth/login', async (credentials: CredentialsPayload, { rejectWithValue }) => {
    try {
        const res = await authService.loginUser(credentials)
        return res.data
    }
    catch(err: any) {
        return rejectWithValue(err.response?.data?.message || 'Login failed')
    }
})

export const logout = createAsyncThunk('auth/logout', async () => {
    try {
        await authService.logoutUser()
    }
    catch {}

    return true
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearAuth: state => {
            state.token = null
            state.loading = false
            state.error = null
        }
    },
    extraReducers: builder => {
        builder
            .addCase(login.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(login.fulfilled, (state, action: PayloadAction<{ token: string }>) => {
                state.loading = false
                state.token = action.payload.token
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string
            })
            .addCase(logout.fulfilled, state => {
                state.token = null
                state.loading = false
                state.error = null
            })
    }
})

export const { clearAuth } = authSlice.actions
export default authSlice.reducer
