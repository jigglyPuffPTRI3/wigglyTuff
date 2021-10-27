import { combineReducers } from 'redux';
import createReviewReducer from './createReviewReducer';

// creates a store of reducers
const reducers = combineReducers({
  createReview: createReviewReducer,
});

export default reducers;
