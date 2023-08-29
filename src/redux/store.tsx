import { configureStore } from "@reduxjs/toolkit";
import productReducer, { fetchProduct } from "./features/productslice";
import categoryReducer, { fetchCategory } from "./features/categoryslice";
import subcategoryReducer, { fetchSubCategory } from "./features/subcategoryslice";
import cartReducer from "./features/cartslice";
import wishlistReducer from "./features/wishlistslice";
import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from 'redux-persist'

import { PersistPartial } from "redux-persist/es/persistReducer";
const persistConfig={
    key:'root',
   version:1,
    storage,
    
}
export const rootReducer = combineReducers({
    cart: cartReducer,
    wishlist:wishlistReducer,
    product: productReducer,
    category: categoryReducer,
    subcategory:subcategoryReducer,
})
const persistedReducer=persistReducer(persistConfig, rootReducer)
export const store=configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    
    
})
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch
export const persistor = persistStore(store)