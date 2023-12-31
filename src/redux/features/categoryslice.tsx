import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {PayloadAction} from '@reduxjs/toolkit'


export interface Category{
    id:string,
    image:string,
    desc:string,
}

export const fetchCategory=createAsyncThunk('category/fetchcategory',
async()=>{
    const response=await fetch('https://glam-edge-backend.onrender.com/category')
    const data=await response.json()
    console.log('Fetched data:', data);
    return data as Category[]
}
) 
export interface Categorystate{
    item: Category[],
    status:'idle'|'loading'|'succeeded'|'failed',
    error:string|null,
    isloading:boolean,

} 
const initialState:Categorystate={
    item:[],
    status:'idle',
    error:null,
    isloading:false,
}

 const categorySlice= createSlice({
    name:"category",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchCategory.pending, (state )=>{
            state.status='loading'
            state.isloading = true;
            
        })
        .addCase(fetchCategory.fulfilled, (state, action:PayloadAction<Category[]>)=>{
            state.status='succeeded',
            state.item=action.payload
            state.isloading = false;

        })
        .addCase(fetchCategory.rejected, (state, action)=>{
            state.status='failed',
            state.error=action.error.message||'error'
            state.isloading = false;

        })
    },
})
export default categorySlice.reducer