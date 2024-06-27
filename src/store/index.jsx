import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice";
import { peopleSlice } from "./slices/peopleSlice";

const store = configureStore({
    reducer: {
        users: userSlice.reducer,
        allPeople: peopleSlice.reducer
    }
})

export default store