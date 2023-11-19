
import { createSlice } from "@reduxjs/toolkit";

const searchResultsSlice = createSlice({
    name : "searchResults",
    initialState : {
        isSearchEmpty : true,
        videoIdList : []
    },
    reducers : {
        userSearched : (state)=>{
            state.isSearchEmpty = false;
        },
        userNotSearched : (state)=>{
            state.isSearchEmpty = true;
        },
        updateVideoIdList : (state, action)=>{
            state.videoIdList = action.payload
        }
    }
})

export const { userSearched, userNotSearched, updateVideoIdList } = searchResultsSlice.actions;
export default searchResultsSlice.reducer;
