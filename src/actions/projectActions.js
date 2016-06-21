import * as ActionTypes from './actionType'

export function saveProject(project) {
    return {
        type: ActionTypes.PROJECT_SAVE_START,
        project
    }
};

export function loadProjects() {
    return {
        type: ActionTypes.LOAD_PROJECTS_START
    }
};