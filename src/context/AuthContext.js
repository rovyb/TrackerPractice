import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'signup':
            return {errorMessage: '', token: action.payload}
        default:
            return state;
    }
}

const signup = (dispatch) => async ({email, password}) => {
        // make api request to sign up with that email and password
        try {
            //if we sign up, modify our state, and make it authenticated
            const response = await trackerApi.post('/signup', {email, password});
            await AsyncStorage.setItem("token", response.data.token);
            dispatch({type: 'signup', payload: response.data.token});

            //navigate to main flow after successful login
            navigate('TrackList');
        } catch (err) {
            console.log(err.response.data)
            dispatch({type: 'add_error', payload: 'Something went wrong with sign up'})
        }


        //if signing up fails, we need to have an error message
    }

const signin = (dispatch) => {
    return ({email, password}) => {
        //Try to signin

        //Handle success - update state

        //Handle failure - error message
    }
}

const signout = (dispatch) => {
    return () => {
        //sign out!
    }
}

export const { Provider, Context} = createDataContext(
    authReducer,
    {signin, signout, signup},
    {token: null, errorMessage: ''} //token: null, is basically the same thing as isSignedIn: false. No token, not signed in
)