import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../redux/features/cartSlice'
import categorySlice from './features/categorySlice'
import searchSlice from './features/searchSlice'
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    category: categorySlice,
    search: searchSlice
},
})

