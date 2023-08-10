import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {PayloadAction} from '@reduxjs/toolkit'


export interface Category{
    id:number,
   
    image:string
}

export const fetchCategory=createAsyncThunk("category/fetchcategory",
async()=>{
    const response=await fetch('http://localhost:4002/category')
    const data=await response.json()
    return data as Category[]
}
) 
export interface Categorystate{
    item: Category[],
    status:'idle'|'loading'|'succeeded'|'failed',
    error:string|null

} 
const initialState:Categorystate={
    item:[],
    status:'idle',
    error:null,
}

 const categorySlice= createSlice({
    name:"category",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchCategory.pending, (state )=>{
            state.status='loading'
            
        })
        .addCase(fetchCategory.fulfilled, (state, action:PayloadAction<Category[]>)=>{
            state.status='succeeded',
            state.item=action.payload

        })
        .addCase(fetchCategory.rejected, (state, action)=>{
            state.status='failed',
            state.error=action.error.message

        })
    },
})
export default categorySlice.reducer