import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter'

export default configureStore({ // redux layaknya services, services dideklarasikan secara global, semua komponen bisa akses
  reducer: {
    counter: counterReducer
  },
})