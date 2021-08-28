import { combineReducers } from "redux";
import pizzaReducers from "./pizzaReducers";

const rootReducer = combineReducers({
    getAllPizzasReducers: pizzaReducers,
});

export default rootReducer;