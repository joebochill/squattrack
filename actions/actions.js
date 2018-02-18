import {store} from '../store/store';
import {btoa} from '../utils/base64';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function requestLogin(userCredentials){
    console.log(userCredentials);
    return function(dispatch){
        return fetch('http://www.josephpboyle.com/api/swingessentials.php/login', {
            method: 'GET',
            headers:{'Authorization': 'basic ' + btoa(userCredentials.username) + '.' + btoa(userCredentials.password)}
        })
        .then((response) => {
            switch(response.status) {
                case 200:
                    response.json()
                    .then((json) => dispatch(loginSuccess(json)));
                    break;
                default:
                    dispatch(loginFailure(response));
                    break;
            }
        })
        .catch((error) => console.error(error));
    }
}

function loginSuccess(response){
    return{
        type: LOGIN_SUCCESS,
        data: response
    }
}

function loginFailure(response){
    return{
        type: LOGIN_ERROR,
        response: response.status
    }
}