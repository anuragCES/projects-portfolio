// import { watchLoadCourses, watchCreateCourse} from './courseSagas';
import {watchLoginRequest} from './userSaga';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    // watchLoadCourses(),
    // watchAuthors(),
    // watchCreateCourse()
    watchLoginRequest()
  ]
}
