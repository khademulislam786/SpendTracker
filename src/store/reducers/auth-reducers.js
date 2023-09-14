import * as ActionTypes from '../../constants/actionTypes';

const initialState = {
    email: null,
    password: null,
    isLoggedIn: false,
}

const userLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ON_LOGIN: {
            return { 
                ...state,
                email: action.payload.email,
                password: action.payload.password,
                isLoggedIn: true
            }
        }
            
        default:
            return state
    }
}

export default userLoginReducer
