import { createSlice } from "@reduxjs/toolkit";
const loadCartFromLocalStorage = ()=>{
    try{
        const storedCart = localStorage.getItem("cart");
        return storedCart ?JSON.parse(storedCart) :[];
    } catch(error ){
        console.log(error);
        return [];
    }
}
const initialState ={
    items:loadCartFromLocalStorage()
}
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addTocart:(state,action)=>{
            const existingItem = state.items.find((item)=>item.id ===action.payload.id);
            if(existingItem){
                existingItem.quantity +=1;
            } else{
                state.items.push({...action.payload,quantity:1});
                localStorage.setItem("cart",JSON.stringify(state.items))
            }
        },
        removeFromCart:(state,action)=>{
            state.items= state.items.filter((item)=>item.id !== action.payload);
            localStorage.setItem("cart",JSON.stringify(state.items))
        },
        increaseQuantity: (state,action)=>{
            state.items= state.items.map((item)=>item.id === action.payload? {...item,quantity:item.quantity+1}:item)
        },
        decreaseQuantity: (state,action)=>{
            state.items= state.items.map((item)=>item.id === action.payload? {...item,quantity:item.quantity-1}:item)
        },
    }
})
export const {addTocart,removeFromCart,increaseQuantity,decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;