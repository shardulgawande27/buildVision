import {
    FETCH_USER,
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
        // case LOGIN_USER_LOADING:
        //     return {
        //         ...state,
        //         login_loading: true,
        //     };
        // case LOGIN_USER_ERROR:
        //     return {
        //         ...state,
        //         login_loading: false,
        //         current_user: null,
        //         login_error: action.payload,
        //     };
        // case LOGIN_USER_SUCCESS:
        //     let cur_user = null;
        //     let mig_user = null;

        //     if(action.payload.is_migrated_user === 'Y' && action.payload.has_set_new_password === 'N') {
        //         mig_user = action.payload;
        //     } else {
        //         cur_user = action.payload;
        //     }

        //     return {
        //         ...state,
        //         login_loading: false,
        //         login_error: null,
        //         current_user: cur_user,
        //         temp_user: null,
        //         guest_error: null,
        //         guest_user: null,
        //         migrated_user: mig_user
        //     };
        // case REMOVE_MIGRATED_USER_DATA: 
        //     return {
        //         ...state,
        //         migrated_user: null
        //     }
        // case LOGOUT:
        //     return {
        //         ...state,
        //         current_user: null,
        //         login_error: null,
        //         temp_user: null,
        //     };
        // case CURRENT_USER_VERIFIED:
        //     return {
        //         ...state,
        //         current_user: {
        //             ...state.current_user,
        //             is_verified: 'Y',
        //         },
        //     };
        // case SIGNUP_USER_LOADING:
        //     return {
        //         ...state,
        //         signup_loading: true,
        //     };
        // case SIGNUP_USER_SUCCESS:
        //     return {
        //         ...state,
        //         signup_loading: false,
        //         signup_error: null,
        //         temp_user: action.payload,
        //         current_user: null,
        //     };
        // case SIGNUP_USER_ERROR:
        //     return {
        //         ...state,
        //         signup_loading: false,
        //         current_user: null,
        //         signup_error: action.payload,
        //     };
        // case SET_TEMP_USER:
        //     return {
        //         ...state,
        //         current_user: null,
        //         temp_user: action.payload
        //     }
        //loading case
        case FETCH_USER:
            return {
                ...state,
                fetch_user_loading: true,
            };
        // //add user data case
        // case FETCH_USER_SUCCESS:
        //     return {
        //         ...state,
        //         fetch_user_loading: false,
        //         current_user: action.payload,
        //         error: null,
        //     };
        // //error case
        // case FETCH_USER_ERROR:
        //     return {
        //         ...state,
        //         fetch_user_loading: false,
        //         current_user: null,
        //         error: action.payload,
        //     };
        // case SET_GUEST_USER:
        //     return {
        //         ...state,
        //         guest_user: action.payload,
        //         guest_error: null,
        //     }
        // case SET_GUEST_ERROR:
        //     return {
        //         ...state,
        //         guest_user: null,
        //         guest_error: action.payload,
        //     }
        // case REMOVE_GUEST_USER: {
        //     return {
        //         ...state,
        //         guest_user: null,
        //         guest_error: null,
        //     }
        // }
        // case SET_USER_BOOKINGS:
        //     return {
        //         ...state,
        //         user_bookings: action.payload
        //     }
        //add user case
        // case ADD_USER:
        //     return {
        //         loading: false,
        //         data: [...state.data, action.payload],
        //     };
        // case GET_USER_DETAILS:
        //     return {
        //         ...state,
        //         singleUserData: action.payload,
        //     };
        default:
            return state;
    }
};

export default userReducer;
