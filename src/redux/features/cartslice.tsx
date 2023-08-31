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
data:Item[],
cartQuantity:number,
cartAmount:number
}
 const initialState:State={
    data:[],
   cartQuantity:0,
    cartAmount:0
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
        state.cartQuantity=state.data.reduce((total, item) => total + item.quantity, 0)
        state.cartAmount+=action.payload.price

        },
        removefromcart:(state,action:PayloadAction<number>)=>{
            const item=state.data.find((item)=>item.id===action.payload)
            if(item){
                state.data=state.data.filter((item)=>item.id !== action.payload)

            
            state.cartQuantity-=item.quantity
            state.cartAmount-=item.price*item.quantity
            state.cartAmount=parseFloat(state.cartAmount.toFixed(2))
            
            }

        },
        increment:(state, action:PayloadAction<number>)=>{
            const item=state.data.find((item)=>item.id===action.payload)
            if(item){
                item.quantity+=1
                state.cartQuantity+=1
                state.cartAmount+=item.price
            }
        },
        decrement:(state, action:PayloadAction<number>)=>{
            const item=state.data.find((item)=>item.id===action.payload)
            if(item && item.quantity>1){
                item.quantity-=1
                state.cartQuantity-=1
                state.cartAmount-=item.price
            }
        }

    }
})
export const {addtocart, increment, decrement, removefromcart}=cartSlice.actions
export default cartSlice.reducer
  


