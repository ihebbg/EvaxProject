import { combineReducers } from 'redux'
import personneReducer from './PersonneReducer'
import centerReducer from './CenterReducer'
import volontaireReducer from './VolontaireReducer'
export default combineReducers({
    personneReducer,
    centerReducer,
    volontaireReducer,
})
