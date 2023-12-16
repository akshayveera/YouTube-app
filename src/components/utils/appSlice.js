import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name : "app",
    initialState : {
        isMenuOpen : true,
        isMenuAbsolute : false,
    },
    reducers : {
        toggleMenu : (state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        openMenu : (state)=>{
            state.isMenuOpen = true;
        },
        closeMenu : (state)=>{
            state.isMenuOpen = false;
        },
        makeMenuNormal : (state)=>{
            state.isMenuAbsolute = false;
        },
        makeMenuAbsolute : (state)=>{
            state.isMenuAbsolute = true;
        },
    }
})

export const {toggleMenu, openMenu , closeMenu, makeMenuNormal, makeMenuAbsolute} = appSlice.actions;
export default appSlice.reducer;