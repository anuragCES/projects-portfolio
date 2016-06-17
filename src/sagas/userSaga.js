import * as ActionTypes from './../actions/actionType';
import { takeEvery, delay } from 'redux-saga';
import { put, call , take} from 'redux-saga/effects';
import userApi from './../api/userApi'

export function* authenticateUser(userData) {
    console.log("watchLoginRequest");
    console.log(userData);
    try {
      const users = yield userApi.authorizeUser(userData);
      console.log(users);
      // yield call(api.buyProducts, cart)
      // yield put(actions.checkoutSuccess(cart))
    } catch(error) {
      //yield put(actions.checkoutFailure(error))
    }
}

export function* watchLoginRequest() {
    console.log(ActionTypes.LOGIN_START);
    yield* takeEvery(ActionTypes.LOGIN_START, authenticateUser)
}