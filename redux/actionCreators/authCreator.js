export const logIn = () => {
    return dispatch => {
        dispatch({
            type: 'LOGIN'
        });
    };
};

export const logOut = () => {
    return dispatch => {
        dispatch({
            type: 'LOGOUT'
        });
    };
};