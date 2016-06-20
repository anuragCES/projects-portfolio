import * as ActionTypes from './actionType'

export function saveProject(project) {
    console.log("saveProject");
    return {
        type: ActionTypes.PROJECT_SAVE_START,
        project
    }
};

export function loadProjects() {
    console.log("loadProjects");
    return {
        type: ActionTypes.LOAD_PROJECTS_START
    }
};