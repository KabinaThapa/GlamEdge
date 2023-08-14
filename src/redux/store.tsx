import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productslice";
import categoryReducer from "./features/categoryslice";
import subcategoryReducer from "./features/subcategoryslice";
import cartReducer from "./features/cartslice";
export const store=configureStore({
    reducer:{
        product: productReducer,
        category: categoryReducer,
        subcategory:subcategoryReducer,
        cart:cartReducer
    },
})
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch