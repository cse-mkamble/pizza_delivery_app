import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cartReducer: {
        cartItems: cartItems
    }
}

const store = createStore(rootReducer, initialState, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;