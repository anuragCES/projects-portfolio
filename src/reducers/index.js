import {combineReducers} from 'redux';
import user from './userReducer';
// import courses from './courseReducer';
// import authors from './authorReducer';
// import ajaxStatus from './ajaxStatusReducer';

const rootReducer = combineReducers({
    user
    // Short Hand propety name
    // courses,
    // authors,
    // ajaxStatus
});

export default rootReducer;