import { USER_LOGIN, USER_LOGOUT } from '../constants';

const login = (state= { isLogin: false }, { type }) => {
    switch(type) {
        case USER_LOGIN:
            return {
                ...state,
                isLogin: state.isLogin = true
            }
        case USER_LOGOUT:
            return {
                ...state,
                isLogin: state.isLogin = false
            }
        default: return state
    }
}

export default login;
