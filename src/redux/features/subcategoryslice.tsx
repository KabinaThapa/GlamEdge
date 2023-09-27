import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {PayloadAction} from '@reduxjs/toolkit'


export interface subcategory{
    id:string,
    subcategory:string,
    image:string
}

export const fetchSubCategory=createAsyncThunk("subcategory/fetchSubCategory",
async()=>{
    const response=await fetch('http://localhost:4003/subcategory')
    const data=await response.json()
    return data as subcategory[]
}
) 
export interface Subcategorystate{
    item: subcategory[],
    status:'idle'|'loading'|'succeeded'|'failed',
    error:string|null

} 
const initialState:Subcategorystate={
    item:[],
    status:'idle',
    error:null,
}

 const subcategorySlice= createSlice({
    name:"subcategory",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchSubCategory.pending, (state )=>{
            state.status='loading'
            
        })
        .addCase(fetchSubCategory.fulfilled, (state, action:PayloadAction<subcategory[]>)=>{
            state.status='succeeded',
            state.item=action.payload

        })
        .addCase(fetchSubCategory.rejected, (state, action)=>{
            state.status='failed',
            state.error=action.error.message||'error'

        })
    },
})
export default subcategorySlice.reducer