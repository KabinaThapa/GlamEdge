import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {PayloadAction} from '@reduxjs/toolkit'


export interface Product{
    id:number,
    subcategory:string,
    name:string,
    category:string,
    price:number,
    image:string,
    quantity:number,
    description?:string,
    rating?:number,
   isfeatured?:boolean,
   onsale?:boolean,
   toptrending?:boolean,
    
}

export const fetchProduct=createAsyncThunk("products/fetchproduct",
async()=>{
    const response=await fetch('http://localhost:4001/products')
    const data=await response.json()
    return data as Product[]
}
) 
export interface Productstate{
    item: Product[],
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
        .addCase(fetchProduct.fulfilled, (state, action:PayloadAction<Product[]>)=>{
            state.status='succeeded',
            state.item=action.payload

        })
        .addCase(fetchProduct.rejected, (state, action)=>{
            state.status='failed',
            state.error=action.error.message

        })
    },
})
export default productSlice.reducer