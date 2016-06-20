// import { watchLoadCourses, watchCreateCourse} from './courseSagas';
import {watchLoginRequest} from './userSaga';
import {watchProjectSaveReq, watchProjectLoadReq} from './ProjectSaga';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    // watchLoadCourses(),
    // watchAuthors(),
    // watchCreateCourse()
    watchLoginRequest(),
    watchProjectSaveReq(),
    watchProjectLoadReq()
  ]
}
