import { put, takeLatest } from 'redux-saga/effects';

function* fetchUserService() {
    const users = yield fetch('https://jsonplaceholder.typicode.com/users/1', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    yield put({ type: "GET_USER_DATA_RECEIVED", data: users});
}

function* fetchUser() {
    yield takeLatest('GET_USER_DATA', fetchUserService)
}

export {
    fetchUser
};

