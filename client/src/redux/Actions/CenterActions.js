import axios from 'axios'
import { toast } from 'react-toastify'
import {
    ADD_CENTER,
    EDIT_CENTER,
    GET_CENTER,
    GET_ALL_CENTERS,
    DELETE_CENTER,
} from '../Constants/ActionTypes'
const env = 'http://localhost:4000'

// get all centers
export const getAllCenters = () => async (dispatch) => {
    try {
        
        const res = await axios.get(env + '/centers')
        console.log(res,'centers');
        dispatch({
            type: GET_ALL_CENTERS,
            payload: res.data,
        })
    } catch (error) {
        console.log(error)

        const { errors, msg } = error.response.data

        if (Array.isArray(errors)) {
            errors.forEach((err) => toast.error(err.msg))
        }
        console.log(errors)
        if (msg) {
            alert(msg)
        }
    }
}

//get center by id
export const getCenter = (idCenter) => async (dispatch) => {
    try {
        const res = await axios.get(env + `/centers/${idCenter}`)
        dispatch({
            type: GET_CENTER,
            payload: res.data,
        })
    } catch (error) {
        console.log(error)

        const { errors, msg } = error.response.data

        if (Array.isArray(errors)) {
            errors.forEach((err) => toast.error(err.msg))
        }
        console.log(errors)
        if (msg) {
            alert(msg)
        }
    }
}

//add center
export const addcenter = (formData) => async (dispatch) => {
    try {
        const res = await axios.post(env + '/centers', formData)
        dispatch({
            type: ADD_CENTER,
            payload: res.data,
        })
        dispatch(getAllCenters())
    } catch (error) {
        console.dir(error)

        const { errors, msg } = error.response.data

        if (Array.isArray(errors)) {
            errors.forEach((err) => toast.error(err.msg))
        }
        console.log(errors)
        if (msg) {
            alert(msg)
        }
    }
}
// delete center
export const deletecenter = (idCenter) => async (dispatch) => {
    try {
        const res = await axios.delete(env + `/centers/${idCenter}`)
        dispatch({
            type: DELETE_CENTER,
            payload: res.data,
        })
        dispatch(getAllCenters())
    } catch (error) {
        console.dir(error)

        const { errors, msg } = error.response.data

        if (Array.isArray(errors)) {
            errors.forEach((err) => toast.error(err.msg))
        }
        console.log(errors)
        if (msg) {
            alert(msg)
        }

        // dispatch({
        //     type: AUTH_ERRORS,
        // })
    }
}
//edit center
export const editCenter = (idCenter, editedCenter) => async (dispatch) => {
    try {
        const res = await axios.put(env + `/centers/${idCenter}`, editedCenter)
        dispatch({
            type: EDIT_CENTER,
            payload: res.data,
        })
        dispatch(getAllCenters())
    } catch (error) {
        console.dir(error)

        const { errors, msg } = error.response.data

        if (Array.isArray(errors)) {
            errors.forEach((err) => toast.error(err.msg))
        }
        console.log(errors)
        if (msg) {
            alert(msg)
        }

        //   dispatch({
        //     type: AUTH_ERRORS,
        //   });
    }
}
