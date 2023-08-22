import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productslice";
import categoryReducer from "./features/categoryslice";
import subcategoryReducer from "./features/subcategoryslice";
import cartReducer from "./features/cartslice";
import wishlistReducer from "./features/wishlistslice";
import { combineReducers } from "@reduxjs/toolkit";
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistPartial } from "redux-persist/es/persistReducer";
const persistConfig={
    key:'root',
    version:1,
    storage,
}
const rootReducer = combineReducers({
    cart: cartReducer,
    wishlist:wishlistReducer,
    product: productReducer,
    category: categoryReducer,
    subcategory:subcategoryReducer,
})
const persistedReducer=persistReducer(persistConfig, rootReducer)
export const store=configureStore({
    reducer:persistedReducer
    
    
})
export type RootState=ReturnType<typeof store.getState> & PersistPartial
export type AppDispatch=typeof store.dispatch
export const persistor = persistStore(store)