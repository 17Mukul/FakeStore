import { createSlice } from "@reduxjs/toolkit";
const initialState={
    searchInput:""
}
const inputSlice =createSlice({
    name:"input",
    initialState,
    reducers:{
        setInputValue:(state,action)=>{
            state.searchInput=action.payload;
        }
    }
})
export const {setInputValue} =inputSlice.actions;
export default inputSlice.reducer;