import { all } from 'redux-saga/effects';
import { fetchUser } from './user.saga';

export default function* rootSaga() {
    yield all([
        fetchUser()
    ]);
}