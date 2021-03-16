import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const intialState = {
    isLoggedIn: false,
    userType: null,
    userInfo: {},
    permission: ['user', 'admin']

}

const loginReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case 'LOGIN_STATUS':
            return {
                ...state,
                isLoggedIn: payload
            }
        case 'USER_TYPE':
            return {
                ...state,
                userType: payload
            }
        case 'USER_INFO':
            return {
                ...state,
                userInfo: payload
            }
        case 'USER_PERMISSION':
            return {
                ...state,
                permission: payload
            }
        default:
            return state
    }
}

const allReducer = combineReducers({
    loginReducer,
})
const middleware = [thunk]
const store = createStore(allReducer, applyMiddleware(...middleware))
export default store
