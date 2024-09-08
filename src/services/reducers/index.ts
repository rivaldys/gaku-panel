import { combineReducers } from '@reduxjs/toolkit'
import { loginReducer } from './Auth'

const reducers = combineReducers({
    login: loginReducer
})

export default reducers