import { createSlice } from "@reduxjs/toolkit";

interface CartState {
    name:string
    catagory:string
    qty:number
}
const initialState:CartState[] = []

const cartSlice = createSlice({
    name:"cart" ,
    initialState,
    reducers:{
        addCart(state, {payload}){
    //  Finding an Existing Item in the Cart:
            const obj = state.find((val) =>val.name == payload.name);
            // Checking if the Item Already Exists:
            if (obj) {
                ++obj.qty;
                // Remove the Old Item
                const newState = state.filter((val) => val.name !== obj.name);
                // Update the State skipping the rest of the code same.
                state = [...newState, obj];
                return;
            }
            // push in initialState
           state.push(payload);
        },
        deleteCart(state,action){
            return state.filter((val) => val.name !== action.payload);
        }
    }
})
 
export const { addCart, deleteCart } =cartSlice.actions
export default cartSlice.reducer