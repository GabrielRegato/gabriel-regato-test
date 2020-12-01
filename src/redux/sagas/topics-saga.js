import {
  put,
  call,
  takeLatest,
} from 'redux-saga/effects';

import {
  SET_LOADING,
  GET_TOPICS,
  GET_TOPICS_INIT,
} from '../actions';

import {
  getAllTopics,
} from '../api';

function* getTopics() {
  yield put({ type: SET_LOADING });

  const todos = yield call(getAllTopics);

  yield put({ type: GET_TOPICS, payload: todos });
}

export default function* topicsSaga() {
  yield takeLatest(GET_TOPICS_INIT, getTopics);
}