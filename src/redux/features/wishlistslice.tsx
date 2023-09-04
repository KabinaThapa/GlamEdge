import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import {Items} from '../types/items'

export interface State{
    item:Items[],

}
export const initialState:State={
    item:[]
}
export const wishlistSlice=createSlice({
    name:'wishlist',
    initialState,
    reducers:{
        addtowishlist:(state, action:PayloadAction<Items>)=>{
            state.item.push(action.payload)
        },
        removefromwishlist:(state, action:PayloadAction<number>)=>{
            state.item=state.item.filter((item)=>item.id!==action.payload)
        }

    }
})
export const {addtowishlist, removefromwishlist}=wishlistSlice.actions
export default wishlistSlice.reducer