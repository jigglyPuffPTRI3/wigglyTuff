const initalState = {
    isLoggedIn: false
};

export default function reducer (state = initalState, action) {
    switch (action.type) {
        case 'LOGIN' : {
            return {
                ...state,
                isLoggedIn: true
            };
        };
        case 'LOGOUT' : {
            return {
                ...state,
                isLoggedIn: false
            };
        };
        default:
            return state;
    };
};