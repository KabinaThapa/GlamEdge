import React from 'react'
import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Item{
    id:number,
    subcategory?:string,
    name:string,
    category?:string,
    price:number,
    image:string,
    quantity:number,
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
            const existingitem=state.data.find((item)=>item.id===action.payload.id)
            //console.log(existingitem)
            if(existingitem){
                existingitem.quantity +=1

            }
            else{

            
            state.data.push({...action.payload, quantity:1})
        }

        },
        removefromcart:(state,action:PayloadAction<number>)=>{
            const item=state.data.find((item)=>item.id===action.payload)
            if(item){
                state.data=state.data.filter((item)=>item.id !== action.payload)

            }

        },
        increment:(state, action:PayloadAction<number>)=>{
            const item=state.data.find((item)=>item.id===action.payload)
            if(item){
                item.quantity+=1
            }
        },
        decrement:(state, action:PayloadAction<number>)=>{
            const item=state.data.find((item)=>item.id===action.payload)
            if(item){
                item.quantity-=1
            }
        }

    }
})
export const {addtocart, increment, decrement, removefromcart}=cartSlice.actions
export default cartSlice.reducer
  


