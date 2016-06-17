import * as ActionTypes from './actionType'

export function checkUser(user) {
    console.log(user);
    return {
        type: ActionTypes.LOGIN_START,
        user
    }
};