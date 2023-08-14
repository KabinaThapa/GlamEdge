import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Item } from '@/redux/features/cartslice';
export interface Item{
    id:number,
    name:string,
    price:number,
    quantity:number
}
export interface State{
    item:Item[],

}
export const initialState:State={
    item:[]
}
export const wishlistSlice=createSlice({
    name:'wishlist',
    initialState,
    reducers:{
        addtowishlist:(state, action:PayloadAction<Item>)=>{
            state.item.push(action.payload)
        },
       

    }
})
export const {addtowishlist}=wishlistSlice.actions
export default wishlistSlice.reducer