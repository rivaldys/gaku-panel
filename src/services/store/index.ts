import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { authReducer } from 'gaku/services/slices'

const store = configureStore({
    reducer: {
        auth: authReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>
export default store