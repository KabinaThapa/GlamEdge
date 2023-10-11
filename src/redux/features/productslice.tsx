import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {PayloadAction} from '@reduxjs/toolkit'
import { Items } from '../types/items'




export const fetchProduct=createAsyncThunk("products/fetchProduct",
async()=>{
    const response=await fetch(process.env.NEXT_PUBLIC_SERVER_PRODUCTS_URL + '/products')
    const data=await response.json()
    return data as Items[]
    
}
) 
export interface Productstate{
    item: Items[],
    status:'idle'|'loading'|'succeeded'|'failed',
    error:string|null

} 
const initialState:Productstate={
    item:[],
    status:'idle',
    error:null,
}

 const productSlice= createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProduct.pending, (state )=>{
            state.status='loading'
            
        })
        .addCase(fetchProduct.fulfilled, (state, action:PayloadAction<Items[]>)=>{
            state.status='succeeded',
            state.item=action.payload

        })
        .addCase(fetchProduct.rejected, (state, action)=>{
            state.status='failed',
            state.error=action.error.message||'error'

        })
    },
})
export default productSlice.reducer