const initialState = {
    username: 'photon',
    password: 'password',
    token: null
}

const userReducer = (state = { user: initialState }, action) => {
    switch (action.type) {
    case 'GET_USER_DATA':
        return {...state, loading: true };
    case 'GET_USER_DATA_RECEIVED':
        return {...state, user: action.data, loading: false }
    case 'GET_USER_DATA_FAILED':
        return {...state, user: initialState, loading: false }
    default:
        return state;
    }
};

export { userReducer };