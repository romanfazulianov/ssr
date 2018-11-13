import users from '../services/users';

export function getUser(uuid) {
    return (dispatch) => {
       return new Promise(resolve => setTimeout(() => {
           resolve(dispatch({ type: 'Entrance', isLoggedIn: users.getValue(uuid)}))
       }, 1000));
    }
}
