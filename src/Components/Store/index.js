import { createStore } from "redux";
import CartReducer from './Cart'
import { combineReducers } from "redux";

const reducer = combineReducers({
    cart:cartReducer,
    categories: categoriesReducer
})


const store = createStore(reducer);

export default store;