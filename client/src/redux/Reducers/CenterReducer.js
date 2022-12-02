import {
    ADD_CENTER,
    GET_ALL_CENTERS,
    DELETE_CENTER,
    GET_CENTER,
    EDIT_CENTER,
} from '../Constants/ActionTypes'
const initialState = {
    centers: null,
    msg: null,
    center: null,
    newCenter: null,
}
const centerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_CENTERS:
            return {
                ...state,
                centers: payload.centers,
                msg: payload.msg,
            }
        case GET_CENTER:
            return {
                ...state,
                center: payload.center,
                msg: payload.msg,
            }
        case ADD_CENTER:
            return {
                ...state,
                newCenter: payload.newCenter,
                msg: payload.msg,
            }
        case DELETE_CENTER:
            return {
                ...state,
                centers: payload.centers,
                msg: payload.msg,
            }
        case EDIT_CENTER:
            return {
                ...state,
                center: payload.center,
                msg: payload.msg,
            }

        default:
            return state
    }
}
export default centerReducer
