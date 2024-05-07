import {
    FETCH_USER,
    LOGIN_USER,
} from './userTypes';

//initial state of user
const initialState = {
    fetch_user_loading: false,
    login_loading: false,
    signup_loading: false,
    login_error: null,
    signup_error: null,
    current_user: null,
    migrated_user: null,
    temp_user: null,
    error: null,
    guest_error: null,
    guest_user: null,
    data: [],
    user_bookings: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
           return{
            ...state,
            data : action.payload
           }
        default:
            return state;
    }
};

export default userReducer;
