import { getProductsReducer } from "./Productreducer";

import {combineReducers} from "redux";

const rootreducers = combineReducers({
    getproductsdata : getProductsReducer
});

export default rootreducers;