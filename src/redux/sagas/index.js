import { spawn } from 'redux-saga/effects';

import topicsSaga from './topics-saga';

export default function* rootSaga() {
  yield spawn(topicsSaga)
}