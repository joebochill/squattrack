import {combineReducers} from 'redux';
import {NavigationActions} from 'react-navigation';
import SquatTrackNavigator from '../navigators/SquatTrackNavigator';

import {LOGIN_SUCCESS, LOGIN_ERROR} from '../actions/actions';

// const userReducer = (state=[], action) => {
// 	switch(action.type){
// 		case LOGIN_SUCCESS:
// 			return{...state, 
// 				username: action.data.personal.username
// 			};
// 		default:
// 			return state;
// 	}
// }
// const settingsReducer = (state=[], action) => {
// 	return state;
// }
// const creditsReducer = (state=[], action) => {
// 	return state;
// }
// const lessonsReducer = (state=[], action) => {
// 	return state;
// }
// const packagesReducer = (state=[], action) => {
// 	return state;
// }
// const loginReducer = (state=[], action) => {
// 	switch(action.type){
// 		case LOGIN_SUCCESS:
// 			return{...state,
// 				token: null,
// 				failCount: 0
// 			}
// 		case LOGIN_ERROR:
// 			return{...state,
// 				token: null,
// 				failCount: state.failCount + 1
// 			}
// 		default:
// 			return state;
// 	}
// }
const initialState = SquatTrackNavigator.router.getStateForAction(SquatTrackNavigator.router.getActionForPathAndParams('Login'));

const navReducer = (state = initialState, action) => {
  const nextState = SquatTrackNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
// // reducer for the navigator actions
// const navigationReducer = (state=[], action) => {
//     const newState = SquatTrackNavigator.router.getStateForAction(action, state);
//     return newState || state;
// }

// const initialAuthState = {isLoggedIn: false};

const AppReducer = combineReducers({
    // userData: userReducer,
    // settings: settingsReducer,
    // credits: creditsReducer,
    // lessons: lessonsReducer,
    // packages: packagesReducer,
    // login: loginReducer,
    nav: navigationReducer
});

export default AppReducer;