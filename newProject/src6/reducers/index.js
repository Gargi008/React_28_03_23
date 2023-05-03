import cartCount from "./cartCount";
import userLogged from "./userLogged";


import { combineReducers } from "redux";


const allReducers = combineReducers({
    cartCount : cartCount,
    userLogged : userLogged,
})


export default allReducers;