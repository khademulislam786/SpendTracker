import { combineReducers } from 'redux'
import spendTrackerReducer from './spend-tracker-reducers';
import userLoginReducer from './auth-reducers';

const appReducer = combineReducers({
    spendTracker: spendTrackerReducer,
    userLogin:userLoginReducer
})

export default appReducer;