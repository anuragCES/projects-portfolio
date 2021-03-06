import * as ActionTypes from './../actions/actionType'; 
import InitialState from './initialState';

export default function userReducer(state = InitialState.userData, action = []){
    "use strict";

    switch (action.type){

        case ActionTypes.LOGIN_SUCCESS: {
            return action.user;
        }
        
        case ActionTypes.LOAD_EMP_SUCCESS: {
            return action.emps;
        }
        
        default : 
            return state;
    } 
}
