import {
    ADD_VOLONTAIRE,
    GET_ALL_VOLONTAIRES,
    GET_VOLONTAIRE,
    DELETE_VOLONTAIRE,
} from '../Constants/ActionTypes'
const initialState = {
    volontaires: null,
    msg: null,
    volontaire: null,
    newVolontaire: null,
}
const volontaireReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_VOLONTAIRES:
            return {
                ...state,
                volontaires: payload.volontaires,
                msg: payload.msg,
            }
        case GET_VOLONTAIRE:
            return {
                ...state,
                volontaire: payload.volontaire,
                msg: payload.msg,
            }
        case ADD_VOLONTAIRE:
            return {
                ...state,
                newVolontaire: payload.newVolontaire,
                msg: payload.msg,
            }
        case DELETE_VOLONTAIRE:
            return {
                ...state,
                volontaires: payload.volontaires,
                msg: payload.msg,
            }

        default:
            return state
    }
}
export default volontaireReducer
