import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import { authReducer } from 'gaku/services/slices'

const logger = createLogger()

const store = configureStore({
    reducer: {
        auth: authReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>
export default store
