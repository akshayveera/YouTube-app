
import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "search",
    initialState : {},
    reducers : {
        cacheResults : (state, action)=>{
            state = Object.assign(state, action.payload)
            // {...state, ...(action.payload)} this is not working figure out why
            // try the above thing using spread operator
        }
    }
})

export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;
