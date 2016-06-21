import * as ActionTypes from './actionType'

export function checkUser(user) {
    return {
        type: ActionTypes.LOGIN_START,
        user
    }
};

export function loadEmp() {
    return {
        type: ActionTypes.LOAD_EMP_START
    }
};