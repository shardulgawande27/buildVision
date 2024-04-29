import { combineReducers } from 'redux';
//imports multiple reducer here
import userReducer from './user/userReducer';
// import quickBookReducer from './quickbook/quickbookReducer';
// import reservationReducer from './reservation/reservationReducer';
// import foodAndBeveragesReducer from './foodAndBeverages/foodAndBeveragesReducer';
// import moviesReducer from './movies/moviesReducer';
// import promotionsReducer from './promotions/promotionsReducer';
// import bookingReducer from './booking/bookingReducer';
// import cinemasReducer from './cinemas/cinemasReducer';
// import configReducer from './config/configReducer';
// import showInput from './showInput/configReducer'

const rootReducer = combineReducers({
   
    user: userReducer,
});

export default rootReducer;
