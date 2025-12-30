import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name : "counter",
    initialState: {
        value : 200
    },
    reducers : {
        IncVal : (state)=>{
            state.value +=1;
        },
        DecVal : (state)=>{
            state.value -=1;
        },
        DevByTen : (state)=>{
            state.value +=10;
        }
    }
})

export const {IncVal , DecVal,DevByTen} = CounterSlice.actions
export default CounterSlice.reducer;