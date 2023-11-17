import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name : "app",
    initialState : {
        isMenuOpen : true,
        isMenuAbsolute : false
    },
    reducers : {
        toggleMenu : (state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu : (state)=>{
            state.isMenuOpen = false;
        },
        makeMenuNormal : (state)=>{
            state.isMenuAbsolute = false;
        },
        makeMenuAbsolute : (state)=>{
            state.isMenuAbsolute = true;
        }
    }
})

export const {toggleMenu, closeMenu, makeMenuNormal, makeMenuAbsolute} = appSlice.actions;
export default appSlice.reducer;