import * as ActionTypes from '../../constants/actionTypes';

export const onTrackMonthlySpend = (data) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.TRACK_MONTHLY_SPEND,
            payload: data,
        })
    };
}

export const onTrackHealthAndFitnesSpend = (data) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.HEALTH_AND_FITNESS,
            payload: data,
        })
    };
}

export const onTrackBeautySpend = (data) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.BEAUTY,
            payload: data,
        })
    };
}

export const onTrackClothSpend = (data) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.CLOTHING,
            payload: data,
        })
    };
}

export const onTrackCosmaticsSpend = (data) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.COSMETICS,
            payload: data,
        })
    };
}
