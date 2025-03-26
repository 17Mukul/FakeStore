import { createSlice } from "@reduxjs/toolkit";
const initialState={
    fetchProducts:[]
}
const productSlice =createSlice({
    name:"product",
    initialState,
    reducers:{
        setProducts:(state,action)=>{
            state.fetchProducts=action.payload;
        }
    }
})
export const {setProducts} =productSlice.actions;
export default productSlice.reducer;