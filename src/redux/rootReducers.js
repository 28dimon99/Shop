import {combineReducers} from "redux";
import phoneReducer from "./phoneReducer";
import cardReducer from "./cardReducer";


export default combineReducers({
    phoneReducer,
    cardReducer

})