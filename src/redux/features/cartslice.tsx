import React from 'react'
import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Item{
    id:string,
    subcategory?:string,
    name:string,
    category?:string,
    price:number,
    image:string
}
 export interface State{
data:Item[]
}
 const initialState:State={
    data:[]
}
export const cartSlice =createSlice ({
    name:'cart',
    initialState,
    reducers:{
        addtocart:(state, action:PayloadAction<Item>)=>{
            state.data.push(action.payload)

        }

    }
})
export const {addtocart}=cartSlice.actions
export default cartSlice.reducer
  


