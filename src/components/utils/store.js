
import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import liveChatSlice from "./liveChatSlice";
import searchResultsSlice from "./searchResultsSlice";

const store = configureStore({
    reducer : {
        app : appSlice,
        search : searchSlice,
        liveChat : liveChatSlice,
        searchResults : searchResultsSlice
    }
});

export default store;