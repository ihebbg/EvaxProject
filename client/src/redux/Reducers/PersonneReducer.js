import { GET_ALL_PERSONS, USER_LOADING, EDIT_INSCRIPTION, REGISTER_USER, LOGIN_USER , GET_AUTH_USER, LOGOUT_USER} from '../Constants/ActionTypes'

const initialState = {
    personnes: null,
    msg: null,
}

const personneReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_PERSONS:
            return {
                ...state,
                personnes: payload.allPersonnes,
                msg: payload.msg,
            }
            
         case USER_LOADING:
                return {
                  ...state,
                  isLoading: true,
                };
          case EDIT_INSCRIPTION:
            return {
                 ...state,
                 inscriptionmodif: payload.inscriptionaftermodif,
                 msg: payload.msg,
                };
          case REGISTER_USER:
          case LOGIN_USER:
                localStorage.setItem('token', payload.token);
                return {
                  ...state,
                  isLoading: false,
                  isAuth: true,
                  msg: payload.msg,
                  ...payload,
                }
           case GET_AUTH_USER:
                    return {
                      ...state,
                      isLoading: false,
                      isAuth: true,
                      msg: payload.msg,
                      ...payload,
                    }
           case LOGOUT_USER:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuth: false,
        user: null,
        isLoading: false,
      };

        default:
            return state
    }
}
export default personneReducer
