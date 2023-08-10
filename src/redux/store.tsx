import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productslice";
import categoryReducer from "./features/categoryslice";
import subcategoryReducer from "./features/subcategoryslice";
export const store=configureStore({
    reducer:{
        product: productReducer,
        category: categoryReducer,
        subcategory:subcategoryReducer
    },
})
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch