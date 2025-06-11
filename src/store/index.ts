import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products';
import cartSliceReducer, { addToCart, removeFromCart, clearCart, updateQuantity } from './cartSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { addToCart, removeFromCart, clearCart, updateQuantity };