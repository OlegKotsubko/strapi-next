import { configureStore } from '@reduxjs/toolkit'
import pizzasSlice from '../reducers/pizzasSlice';

export default configureStore({
  reducer: {
    pizzas: pizzasSlice,
  }
})
