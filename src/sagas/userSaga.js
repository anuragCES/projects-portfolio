import * as ActionTypes from './../actions/actionType';
import { takeEvery, delay } from 'redux-saga';
import { put, call , take} from 'redux-saga/effects';
import userApi from './../api/userApi';
import {browserHistory} from 'react-router';

export function* authenticateUser(userData) {
    try {
      const user = yield userApi.authorizeUser(userData);
      yield put({type: ActionTypes.LOGIN_SUCCESS, user});
      browserHistory.push('/');
    } catch(error) {
      console.log(error);
      yield put({type: ActionTypes.LOGIN_FAILED, error});
    }
}

export function* loadEmps() {
  try {
    const emps = yield userApi.getAllEmployees();
    console.log(emps);
    yield put({type: ActionTypes.LOAD_EMP_SUCCESS, emps});
  } catch(error) {
    console.log(error);
    yield put({type: ActionTypes.LOAD_EMP_FAILED, error});
  }
}

export function* watchLoginRequest() {
    yield* takeEvery(ActionTypes.LOGIN_START, authenticateUser)
}

export function* watchEmpsRequest() {
    yield* takeEvery(ActionTypes.LOAD_EMP_START, loadEmps)
}