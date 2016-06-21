import {watchLoginRequest, watchEmpsRequest} from './userSaga';
import {watchProjectSaveReq, watchProjectLoadReq} from './ProjectSaga';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    watchLoginRequest(),
    watchProjectSaveReq(),
    watchProjectLoadReq(),
    watchEmpsRequest()
  ]
}
