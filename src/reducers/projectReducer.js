import * as ActionTypes from './../actions/actionType'; 
import InitialState from './initialState';

export default function projectReducer(state = InitialState.projectData, action = []){
    "use strict";

    switch (action.type){

        case ActionTypes.PROJECT_SAVE_SUCCESS: {
            return [...state, Object.assign({}, action.projects)];
        }
        
        case ActionTypes.LOAD_PROJECTS_SUCCESS: {
            return action.projects;
        }

        default : 
            return state;
    } 
}
