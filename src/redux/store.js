import { configureStore } from "@reduxjs/toolkit";
import counterRouter from './Feature/CounterSlice'

const store = configureStore({
    reducer : {
     counter : counterRouter
    }
})

export default store