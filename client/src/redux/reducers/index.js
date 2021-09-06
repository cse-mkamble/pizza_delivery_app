import { combineReducers } from "redux";
import { getAllPizzasReducer, addPizzaReducer, getPizzaByIdReducer } from "./pizzaReducer";
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
    getPizzaByIdReducer: getPizzaByIdReducer,
});

export default rootReducer;