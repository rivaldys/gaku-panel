import { combineReducers } from '@reduxjs/toolkit'
import { loginReducer, logoutReducer } from './Auth'

const reducers = combineReducers({
    login: loginReducer,
    logout: logoutReducer
})

export default reducers