import axios from "axios";

export const postWishRequest = () => {
    return {
        type: "POST_WISH_REQUEST"
    }
}

export const postWishSuccess = () => {
    return {
        type: "POST_WISH_SUCCESS"
    }
}

export const postWishFailure = (err) => {
    return {
        type: "POST_WISH_FAILURE",
        payload: err
    }
}

export const getWishRequest = () => {
    return {
        type: "GET_WISH_REQUEST"
    }
}

export const getWishSuccess = (payload) => {
    return {
        type: "GET_WISH_SUCCESS",
        payload
    }
}

export const getWishFailure = (err) => {
    return {
        type: "GET_WISH_FAILURE",
        payload: err
    }
}

export const deleteWishRequest = () => {
    return {
        type: "DELETE_WISH_REQUEST"
    }
}

export const deleteWishSuccess = () => {
    return {
        type: "DELETE_WISH_SUCCESS"
    }
}

export const deleteWishFailure = (err) => {
    return {
        type: "DELETE_WISH_FAILURE",
        payload: err
    }
}


export const postWishData = payload => async dispatch => {
    dispatch( postWishRequest() )

    try {
        const res = await axios.post("https://masai-project.herokuapp.com/wihlist", payload);
        dispatch(postWishSuccess());
        dispatch(getWishData());
    } catch (err) {
        dispatch(postWishFailure());
    }
}


export const deleteWishData = (idx) => async dispatch => {
    dispatch( deleteWishRequest() )

    try {
        const res = await axios.delete(`https://masai-project.herokuapp.com/wihlist/${idx}`);
        dispatch(deleteWishSuccess());
        dispatch(getWishData());
    } catch (err) {
        dispatch(deleteWishFailure());
    }
}

export const getWishData = payload => async dispatch => {
    dispatch( getWishRequest() )

    try {
        const res = await axios.get("https://masai-project.herokuapp.com/wihlist", payload);
        dispatch(getWishSuccess(res.data));
    } catch (err) {
        dispatch(getWishFailure());
    }
}
