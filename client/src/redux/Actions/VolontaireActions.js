import axios from 'axios'
import { toast } from 'react-toastify'

import {
    ADD_VOLONTAIRE,
    DELETE_VOLONTAIRE,
    GET_ALL_VOLONTAIRES,
    GET_VOLONTAIRE,
    EDIT_VOOLONTAIRE,
} from '../Constants/ActionTypes'
const env = 'http://localhost:4000'

// get all volontaires
export const getAllvolontaires = () => async (dispatch) => {
    try {
        
        const res = await axios.get(env + '/api/volontaires')
       
        dispatch({
            type: GET_ALL_VOLONTAIRES,
            payload: res.data,
        })
        // toast(res.data.message)
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
//get one volontaire by id
export const getVolontaire = (idVolontaire) => async (dispatch) => {
    try {
        const res = await axios.get(env + `/volontaires/${idVolontaire}`)
        dispatch({
            type: GET_VOLONTAIRE,
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
//add volontaire
export const addvolontaire = (formData) => async (dispatch) => {
    try {
        const res = await axios.post(env + '/volontaires', formData)
        dispatch({
            type: ADD_VOLONTAIRE,
            payload: res.data,
        })
        // toast(res.data.message)
        dispatch(getAllvolontaires())
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
// delete volontaire
export const deletevolontaire = (idVolontaire) => async (dispatch) => {
    try {
        const res = await axios.delete(env + `/volontaires/${idVolontaire}`)
        dispatch({
            type: DELETE_VOLONTAIRE,
            payload: res.data,
        })
        // toast(res.data.message)
        dispatch(getAllvolontaires())
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
//edit volontaire
export const editVolontaire =
    (idVolontaire, editedVolontaire) => async (dispatch) => {
        try {
            const res = await axios.put(
                env + `/volontaires/${idVolontaire}`,
                editedVolontaire,
            )
            dispatch({
                type: EDIT_VOOLONTAIRE,
                payload: res.data,
            })
            dispatch(getAllvolontaires())
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
