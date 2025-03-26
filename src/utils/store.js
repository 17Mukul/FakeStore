import {configureStore} from "@reduxjs/toolkit"
import categoryReducer from "./slices/categorySlice";
import inputReducer from "./slices/inputSlice";
import ProductReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice"
const store = configureStore({
    reducer:{
    category:categoryReducer,
    input: inputReducer,
    product:ProductReducer,
    cart:cartReducer
    }
})
export default store;