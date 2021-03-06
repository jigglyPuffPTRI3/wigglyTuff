import { combineReducers } from 'redux';
import createReviewReducer from './createReviewReducer';
import authReducer from './authReducer';

// creates a store of reducers
const reducers = combineReducers({
    reviews: createReviewReducer, 
    auth: authReducer,
});

export default reducers;
