import {combineReducers} from "redux";

import cardReducer from "./cardReducer";
import phoneReducer from "./phoneReducer";



export default combineReducers({
    phoneReducer,
    cardReducer

})