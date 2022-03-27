import axios from "axios";

export const postBagRequest = () => {
    return {
        type: "POST_BAG_REQUEST"
    }
}

export const postBagSuccess = () => {
    return {
        type: "POST_BAG_SUCCESS"
    }
}

export const postBagFailure = (err) => {
    return {
        type: "POST_BAG_FAILURE",
        payload: err
    }
}

export const getBagRequest = () => {
    return {
        type: "GET_BAG_REQUEST"
    }
}

export const getBagSuccess = (payload) => {
    return {
        type: "GET_BAG_SUCCESS",
        payload
    }
}

export const getBagFailure = (err) => {
    return {
        type: "GET_BAG_FAILURE",
        payload: err
    }
}

export const deleteBagRequest = () => {
    return {
        type: "DELETE_BAG_REQUEST"
    }
}

export const deleteBagSuccess = () => {
    return {
        type: "DELETE_BAG_SUCCESS"
    }
}

export const deleteBagFailure = (err) => {
    return {
        type: "DELETE_BAG_FAILURE",
        payload: err
    }
}

export const postBagData = payload => async dispatch => {
    dispatch( postBagRequest() )

    try {
        const res = await axios.post("https://masai-project.herokuapp.com/bag", payload);
        dispatch(postBagSuccess());
        dispatch(getBagData());
    } catch (err) {
        dispatch(postBagFailure());
    }
}


export const deleteBagData = (idx) => async dispatch => {
    dispatch( deleteBagRequest() )

    try {
        const res = await axios.delete(`https://masai-project.herokuapp.com/bag/${idx}`);
        dispatch(deleteBagSuccess());
        dispatch(getBagData());
    } catch (err) {
        dispatch(deleteBagFailure());
    }
}

export const getBagData = payload => async dispatch => {
    dispatch( getBagRequest() )

    try {
        const res = await axios.get("https://masai-project.herokuapp.com/bag", payload);
        dispatch(getBagSuccess(res.data));
    } catch (err) {
        dispatch(getBagFailure());
    }
}
