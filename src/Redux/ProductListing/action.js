import { GET_DATA_FAILURE, GET_DATA_FILTER, GET_DATA_REQUEST, GET_DATA_SUCCESS, SET_FILTER_DATA, UPDATE_FILTER_DATA } from "./actionType"
import Axios from "axios"


const axios = Axios.create({
    baseURL:"https://masai-project.herokuapp.com"
})


const getDataRequest = () => {
    return {
        type : GET_DATA_REQUEST
    }
}

const getDataSuccess = (payload) => {
    return {
        type : GET_DATA_SUCCESS,
        payload
    }
}

const updateData = (payload) => {
    return {
        type : UPDATE_FILTER_DATA,
        payload
    }
}

const getDataFilterSuccess = (payload) => {
    return {
        type : GET_DATA_FILTER,
        payload
    }
}

const getDataFailure = (error) => {
    return {
        type : GET_DATA_FAILURE,
        payload : error
    }
}

const setFilterData = (payload) => {
    return {
        type : SET_FILTER_DATA,
        payload
    }
}


const getData =(payload) => async (dispatch) => {
    dispatch(getDataRequest())

    const config = {
        url:"/product_data",
        method : "get",
    }

    try {
        const res = await axios(config)
        dispatch(getDataSuccess(res.data))
    } catch (err) {
        dispatch(getDataFailure(err))
    }
}


const getDataFilterBySort = (page, sort, order) => async (dispatch) => {
    dispatch(getDataRequest())

    const config = {
        url:"/product_data",
        method : "get",
        params : {
            _page : page,
            _limit : 50,
            _sort : sort,
            _order : order,
        }
    }

    try {
        const res = await axios(config)
        dispatch(getDataFilterSuccess(res.data))
    } catch (err) {
        dispatch(getDataFailure(err))
    }
}

const getDataFilterByBrand1 = (page, brand) => async (dispatch) => {
    dispatch(getDataRequest())

    const config = {
        url:"/product_data",
        method : "get",
        params : {
            _page : page,
            _limit : 50,
            brand : brand[0]
        }
    }

    try {
        const res = await axios(config)
        dispatch(getDataFilterSuccess(res.data))
        console.log(res.data)
    } catch (err) {
        dispatch(getDataFailure(err))
    }
}


const getDataFilterByBrand2 = (page, brand) => async (dispatch) => {
    dispatch(getDataRequest())

    const config = {
        url:"/product_data",
        method : "get",
        params : {
            _page : page,
            _limit : 50,
            brand_like : brand[0] & brand[1]
        }
    }

    try {
        const res = await axios(config)
        dispatch(getDataFilterSuccess(res.data))
        console.log(res.data)
    } catch (err) {
        dispatch(getDataFailure(err))
    }
}



const getDataFilterByType = (page) => async (dispatch) => {
    dispatch(getDataRequest())

    const config = {
        url:"/product_data",
        method : "get",
        params : {
            _page : page,
            _limit : 50,
            type_like : "NEW SEASON",
            type_like : "NEW"
        }
    }

    try {
        const res = await axios(config)
        dispatch(getDataFilterSuccess(res.data))
    } catch (err) {
        dispatch(getDataFailure(err))
    }
}


export {getDataRequest, getDataSuccess, getDataFailure, getData, getDataFilterBySort, getDataFilterSuccess, getDataFilterByType, updateData, setFilterData}