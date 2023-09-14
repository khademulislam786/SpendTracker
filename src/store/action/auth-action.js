import * as ActionTypes from '../../constants/actionTypes';

export const onUserLogin = (data) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.ON_LOGIN,
            payload: data,
        })
    };
}