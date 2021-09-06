import { configureStore } from '@reduxjs/toolkit'

import navReducer from './src/slices/navSlice'

export const store = configureStore({
  reducer: {
    nav: navReducer
  }
})
// The store now has redux-thunk added and the Redux DevTools Extension is turned on