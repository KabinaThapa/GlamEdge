import React from 'react'
import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Item{
    name:string,
    price:number,
    image:string,
}
interface State{
items:Item[]
}
 const initialState:State={
    items:[]
}
export const cartSlice =createSlice ({
    name:'cart',
    initialState,
    reducers:{
        addtocart:(state, action:PayloadAction<Item>)=>{
            state.items.push(action.payload)

        }

    }
})
export const {addtocart}=cartSlice.actions
export default cartSlice.reducer
  


