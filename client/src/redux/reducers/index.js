import { combineReducers } from "redux";
import { getAllPizzasReducer, addPizzaReducer } from "./pizzaReducer";
import { cartReducer } from "./cartReducer";
import { registerUserReducer, loginUserReducer } from "./userReducer";
import { placeOrderReducer, getUserOdersReducer } from "./orderReducer";

const rootReducer = combineReducers({
    getAllPizzasReducer: getAllPizzasReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    placeOrderReducer: placeOrderReducer,
    getUserOdersReducer: getUserOdersReducer,
    addPizzaReducer: addPizzaReducer,
});

export default rootReducer;