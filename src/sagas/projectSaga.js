import * as ActionTypes from './../actions/actionType';
import { takeEvery, delay } from 'redux-saga';
import { put, call , take} from 'redux-saga/effects';
import projectApi from './../api/projectApi';
import {browserHistory} from 'react-router';

export function* saveProjectData(data) {
    console.log("Project Saga 2");
    try {
        console.log(data.project);
        const projects = yield projectApi.saveProject(data.project);
        console.log(projects);
        yield put({type: ActionTypes.PROJECT_SAVE_SUCCESS, projects});
        browserHistory.push('/');
    } catch(error) {
      console.log(error);
      yield put({type: ActionTypes.PROJECT_SAVE_FAILED, error});
    }
}

export function* loadProjects() {
    console.log("Project Saga 1");
    try {
        const projects = yield projectApi.getProjects();
        console.log(projects);
        yield put({type: ActionTypes.LOAD_PROJECTS_SUCCESS, projects});
    } catch(error) {
      console.log(error);
      yield put({type: ActionTypes.LOAD_PROJECTS_FAILED, error});
    }
}

export function* watchProjectSaveReq() {
    console.log("get");
    yield* takeEvery(ActionTypes.PROJECT_SAVE_START, saveProjectData);
}

export function* watchProjectLoadReq() {
    console.log("that");
    yield* takeEvery(ActionTypes.LOAD_PROJECTS_START, loadProjects);
}