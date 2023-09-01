import { configureStore } from '@reduxjs/toolkit'
import cvReducer from './slices/cvSlice'

export const store = configureStore({
    reducer: {
        cv: cvReducer
    },
})