import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../store/slices/product";
import cartSlice from "../store/slices/cart";
import { postApi } from "./slices/postApi";
import { setupListeners } from '@reduxjs/toolkit/query'


export const store = configureStore({
    reducer :{
        // define state and data
        productArray:productSlice,
        cartArray:cartSlice,
        [postApi.reducerPath]: postApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postApi.middleware),
 
    
});
setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch