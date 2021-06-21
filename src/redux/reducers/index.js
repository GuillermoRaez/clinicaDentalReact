import {combineReducers} from 'redux';
import credentials from '../reducers/credentials-reducers';

const rootReducer = combineReducers({
    credentials,
});

export default rootReducer;