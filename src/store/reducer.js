const initialState = {
    isLoggedIn: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'Entrance': {
            return {
                ...state,
                isLoggedIn: action.isLoggedIn
            }
        }
        default:
            return state;
    }

}