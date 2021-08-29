import { combineReducers } from "redux";
import { getAllPizzasReducer } from "./pizzaReducers";

const rootReducer = combineReducers({
    getAllPizzasReducer: getAllPizzasReducer,
});

export default rootReducer;